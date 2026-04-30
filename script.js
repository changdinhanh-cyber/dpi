// Khởi tạo các biến hệ thống
let currentOS = 'Android';
let animationIds = {}; // Quản lý ID hiệu ứng để chống tràn RAM

const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const autocompleteList = document.getElementById('autocompleteList');
const loadingOverlay = document.getElementById('loadingOverlay');

// =====================================
// 1. LOGIC CHỌN HỆ ĐIỀU HÀNH
// =====================================
function selectOS(os) {
    currentOS = os;
    
    // Đổi hiệu ứng nút bấm
    document.getElementById('btn-Android').classList.remove('active');
    document.getElementById('btn-iOS').classList.remove('active');
    document.getElementById(`btn-${os}`).classList.add('active');
    
    // Đổi chữ gợi ý trong ô tìm kiếm
    searchInput.placeholder = os === 'Android' ? 'Nhập tên máy Android... (VD: Oppo A3s)' : 'Nhập tên iPhone/iPad... (VD: iPhone 13 Pro Max)';
    
    // Xóa sạch ô nhập và ẩn các thành phần gợi ý khi chuyển tab
    searchInput.value = '';
    clearBtn.style.display = 'none';
    autocompleteList.style.display = 'none';
}

// =====================================
// 2. LOGIC Ô TÌM KIẾM & NÚT X (CLEAR)
// =====================================
searchInput.addEventListener('input', function() {
    const val = this.value.toLowerCase().trim();
    
    // Hiện nút X nếu có chữ, ẩn nếu rỗng
    if (val.length > 0) {
        clearBtn.style.display = 'flex';
    } else {
        clearBtn.style.display = 'none';
    }

    autocompleteList.innerHTML = '';
    
    if (!val) { 
        autocompleteList.style.display = 'none'; 
        return; 
    }

    let matches = 0;
    
    for (let i = 0; i < masterDB.length; i++) {
        const item = masterDB[i];
        
        // Khóa chặt: Chỉ gợi ý máy thuộc hệ điều hành đang chọn
        if(item.os !== currentOS) continue; 

        let isMatch = false;
        const itemNameLower = item.name.toLowerCase();

        // Thuật toán: Ưu tiên khớp một phần tên, sau đó mới xét đến từ khóa
        if (itemNameLower.includes(val)) {
            isMatch = true;
        } else {
            for (let kw of item.keywords) {
                if (val.includes(kw) || kw.includes(val)) {
                    isMatch = true;
                    break;
                }
            }
        }
        
        if (isMatch) {
            matches++;
            const div = document.createElement('div');
            div.className = 'ac-item';
            
            // In đậm phần chữ trùng khớp
            const regex = new RegExp(`(${val})`, "gi");
            const highlightedName = item.name.replace(regex, "<span class='highlight'>$1</span>");

            div.innerHTML = `
                <img src="${item.img}" class="ac-img" alt="img">
                <div class="ac-info">
                    <div class="ac-name">${highlightedName}</div>
                    <div class="ac-stats">TTDS: <span>${item.ttds}</span> | Nút Bắn: <span>${item.fireBtn}</span></div>
                </div>
            `;
            
            // Khi chọn gợi ý -> Tự động điền chữ và bấm TÌM
            div.addEventListener('click', function() {
                searchInput.value = item.name;
                autocompleteList.style.display = 'none';
                clearBtn.style.display = 'flex';
                document.getElementById('searchBtn').click(); 
            });
            autocompleteList.appendChild(div);
        }
    }
    
    // Nếu không tìm thấy máy nào
    if (matches === 0) {
        autocompleteList.innerHTML = `<div style="padding: 15px; text-align: center; color: #9BA1A6; font-size: 13px;">Chưa có dữ liệu cho "${val}" ở ${currentOS}.</div>`;
    }
    
    autocompleteList.style.display = 'block';
});

// Sự kiện bấm vào nút X xóa nhanh
clearBtn.addEventListener('click', function() {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    autocompleteList.style.display = 'none';
    searchInput.focus(); // Tự động bật lại bàn phím
});

// Chặn phím Enter/Go trên điện thoại gây load trang
searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        document.getElementById('searchBtn').click(); 
        searchInput.blur(); // Thu gọn bàn phím
    }
});

// Ẩn Autocomplete khi bấm ra ngoài vùng tìm kiếm
document.addEventListener('click', function(e) {
    if (!document.querySelector('.search-input-group').contains(e.target) && !autocompleteList.contains(e.target)) {
        autocompleteList.style.display = 'none';
    }
});

// =====================================
// 3. LOGIC HIỂN THỊ BẢNG LỖI / KẾT QUẢ
// =====================================
function renderError(title, desc) {
    document.getElementById('defaultMsg').style.display = 'none';
    document.getElementById('deviceBox').style.display = 'none';
    document.getElementById('sensWrapper').classList.remove('active');
    
    const errorBox = document.getElementById('errorBox');
    errorBox.style.display = 'block';
    errorBox.innerHTML = `<div class="error-title">⚠️ ${title}</div><div class="error-desc">${desc}</div>`;
}

// Lắng nghe sự kiện click nút TÌM
document.getElementById('searchBtn').addEventListener('click', () => {
    const val = searchInput.value.trim().toLowerCase();
    
    if(!val) {
        showToast("Vui lòng nhập tên thiết bị!");
        return;
    }
    
    autocompleteList.style.display = 'none';
    
    // KÍCH HOẠT HIỆU ỨNG LOADING TRUNG TÂM
    loadingOverlay.classList.add('active');

    // DELAY 1 GIÂY ĐỂ TẠO CẢM GIÁC XỬ LÝ CHUYÊN NGHIỆP
    setTimeout(() => {
        
        loadingOverlay.classList.remove('active'); // Tắt Loading

        let foundDevice = null;

        // Lớp 1: Khớp chính xác tuyệt đối tên máy
        foundDevice = masterDB.find(d => d.name.toLowerCase() === val);

        // Lớp 2: Khớp chính xác từ khóa cứng
        if (!foundDevice) {
            foundDevice = masterDB.find(d => d.keywords.some(kw => kw === val));
        }

        // Lớp 3: Tìm gần đúng
        if (!foundDevice) {
            foundDevice = masterDB.find(d => val.includes(d.name.toLowerCase()) || d.keywords.some(kw => val.includes(kw)));
        }

        // Xử lý luồng dữ liệu
        if (foundDevice) {
            if (foundDevice.os !== currentOS) {
                renderError(`LỖI CHỌN NỀN TẢNG`, `Máy <b>${foundDevice.name}</b> là của hệ <b>${foundDevice.os}</b>. Hãy chuyển đúng tab OS để xem thông số!`);
                return;
            }
            renderResult(foundDevice);
        } else {
            renderError(`THIẾT BỊ KHÔNG TỒN TẠI`, `Hệ thống chưa có thông số cho <b>${searchInput.value}</b>. Xin vui lòng thử máy khác!`);
        }

    }, 1000); // 1000ms = 1s
});

function renderResult(device) {
    // Dọn dẹp lỗi và thông báo mặc định
    document.getElementById('errorBox').style.display = 'none';
    document.getElementById('defaultMsg').style.display = 'none';
    
    // Hiển thị khung tên máy
    document.getElementById('deviceBox').style.display = 'block';
    document.getElementById('deviceName').innerText = device.name;
    
    // Xử lý Huy hiệu (Tier Badge)
    const tierBadge = document.getElementById('deviceTier');
    tierBadge.className = 'device-tier-badge'; 
    if (device.tier === 'high') { 
        tierBadge.classList.add('tier-high'); tierBadge.innerText = 'CẤU HÌNH CAO CẤP'; 
    } else if (device.tier === 'low') { 
        tierBadge.classList.add('tier-low'); tierBadge.innerText = 'CẤU HÌNH ĐỜI THẤP'; 
    } else { 
        tierBadge.classList.add('tier-mid'); tierBadge.innerText = 'CẤU HÌNH TẦM TRUNG'; 
    }
    
    // Bật khung Độ nhạy
    document.getElementById('sensWrapper').classList.add('active');
    
    // Reset thanh chạy về 0 để mồi Animation
    for(let i = 0; i < 6; i++) {
        document.getElementById(`bar-${i+1}`).style.width = '0%';
        animateValue(`val-${i+1}`, 0, device.stats[i], 1200);
        // Trễ 50ms để CSS kịp reset trước khi chạy thanh màu
        setTimeout(() => { 
            document.getElementById(`bar-${i+1}`).style.width = (device.stats[i]/200)*100 + '%'; 
        }, 50);
    }
    
    // Kích hoạt chạy số liệu TTDS và Nút Bắn
    animateValue('val-ttds', 0, device.ttds, 1200);
    animateValue('val-firebtn', 0, device.fireBtn, 1200);
}

// =====================================
// 4. HIỆU ỨNG & TIỆN ÍCH (ANIMATION & TOAST)
// =====================================
function animateValue(id, start, end, duration) {
    if (animationIds[id]) cancelAnimationFrame(animationIds[id]); // Xóa hiệu ứng cũ chống giật lag
    
    const obj = document.getElementById(id);
    if(!obj) return;
    let startTimestamp = null;
    
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Công thức Cubic-Bezier để số chạy mượt ở cuối
        const easeOutQuart = 1 - Math.pow(1 - progress, 4); 
        obj.innerHTML = Math.floor(easeOutQuart * (end - start) + start);
        
        if (progress < 1) {
            animationIds[id] = window.requestAnimationFrame(step);
        }
    };
    animationIds[id] = window.requestAnimationFrame(step);
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.classList.add("show");
    setTimeout(() => { toast.classList.remove("show"); }, 3000);
}

// =====================================
// 5. ĐĂNG KÝ SERVICE WORKER (ĐỂ CHẠY PWA - THÊM VÀO MÀN HÌNH CHÍNH)
// =====================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker đăng ký thành công! Phạm vi:', reg.scope))
            .catch(err => console.error('Lỗi đăng ký Service Worker:', err));
    });
}
