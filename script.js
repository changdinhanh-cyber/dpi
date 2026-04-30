let currentOS = 'Android';
let animationIds = {}; 

// HÀM CHỌN OS
function selectOS(os) {
    currentOS = os;
    document.getElementById('btn-Android').classList.remove('active');
    document.getElementById('btn-iOS').classList.remove('active');
    document.getElementById(`btn-${os}`).classList.add('active');
    
    searchInput.placeholder = os === 'Android' ? 'Nhập tên máy Android... (VD: Oppo A3s)' : 'Nhập tên iPhone/iPad... (VD: iPhone 13 Pro Max)';
    
    // Reset khung input khi đổi tab
    searchInput.value = '';
    clearBtn.style.display = 'none';
    autocompleteList.style.display = 'none';
}

const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const autocompleteList = document.getElementById('autocompleteList');

// LOGIC NÚT X (CLEAR BUTTON)
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
        if(item.os !== currentOS) continue; 

        let isMatch = false;
        const itemNameLower = item.name.toLowerCase();

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
            
            const regex = new RegExp(`(${val})`, "gi");
            const highlightedName = item.name.replace(regex, "<span class='highlight'>$1</span>");

            div.innerHTML = `
                <img src="${item.img}" class="ac-img" alt="img">
                <div class="ac-info">
                    <div class="ac-name">${highlightedName}</div>
                    <div class="ac-stats">TTDS: <span>${item.ttds}</span> | Nút Bắn: <span>${item.fireBtn}</span></div>
                </div>
            `;
            
            div.addEventListener('click', function() {
                searchInput.value = item.name;
                autocompleteList.style.display = 'none';
                clearBtn.style.display = 'flex';
                document.getElementById('searchBtn').click(); // Bấm gợi ý là TÌM luôn
            });
            autocompleteList.appendChild(div);
        }
    }
    
    if (matches === 0) {
        autocompleteList.innerHTML = `<div style="padding: 15px; text-align: center; color: #9BA1A6; font-size: 13px;">Chưa có dữ liệu cho "${val}" ở ${currentOS}.</div>`;
    }
    
    autocompleteList.style.display = 'block';
});

// Sự kiện bấm vào nút X
clearBtn.addEventListener('click', function() {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    autocompleteList.style.display = 'none';
    searchInput.focus(); // Nháy chuột lại vào khung tìm kiếm
});

// Chặn phím Enter gây load trang
searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        document.getElementById('searchBtn').click(); 
        searchInput.blur(); 
    }
});

// Ẩn Autocomplete khi bấm ra ngoài
document.addEventListener('click', function(e) {
    if (!document.querySelector('.search-input-group').contains(e.target) && !autocompleteList.contains(e.target)) {
        autocompleteList.style.display = 'none';
    }
});

function renderError(title, desc) {
    document.getElementById('defaultMsg').style.display = 'none';
    document.getElementById('deviceBox').style.display = 'none';
    document.getElementById('sensWrapper').classList.remove('active');
    
    const errorBox = document.getElementById('errorBox');
    errorBox.style.display = 'block';
    errorBox.innerHTML = `<div class="error-title">⚠️ ${title}</div><div class="error-desc">${desc}</div>`;
}

// XỬ LÝ NÚT TÌM KIẾM VÀ HIỆU ỨNG LOADING 1S
document.getElementById('searchBtn').addEventListener('click', () => {
    const val = searchInput.value.trim().toLowerCase();
    if(!val) {
        showToast("Vui lòng nhập tên thiết bị!");
        return;
    }
    
    autocompleteList.style.display = 'none';
    
    // 1. KÍCH HOẠT HIỆU ỨNG LOADING TRUNG TÂM
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.add('active');

    // 2. SET TIMEOUT ĐỢI 1 GIÂY (1000ms) MỚI TẮT LOADING VÀ HIỆN KẾT QUẢ
    setTimeout(() => {
        
        loadingOverlay.classList.remove('active'); // Tắt loading

        let foundDevice = masterDB.find(d => d.name.toLowerCase() === val);

        if (!foundDevice) {
            foundDevice = masterDB.find(d => d.keywords.some(kw => kw === val));
        }

        if (!foundDevice) {
            foundDevice = masterDB.find(d => val.includes(d.name.toLowerCase()) || d.keywords.some(kw => val.includes(kw)));
        }

        if (foundDevice) {
            if (foundDevice.os !== currentOS) {
                renderError(`LỖI CHỌN NỀN TẢNG`, `Máy <b>${foundDevice.name}</b> là của hệ <b>${foundDevice.os}</b>. Hãy chuyển đúng tab để tìm!`);
                return;
            }
            renderResult(foundDevice);
        } else {
            renderError(`THIẾT BỊ KHÔNG TỒN TẠI`, `Hệ thống chưa có thông số cho <b>${searchInput.value}</b>. Hãy thử máy khác!`);
        }

    }, 1000); // 1000 milliseconds = 1s
});

function renderResult(device) {
    document.getElementById('errorBox').style.display = 'none';
    document.getElementById('defaultMsg').style.display = 'none';
    
    document.getElementById('deviceBox').style.display = 'block';
    document.getElementById('deviceName').innerText = device.name;
    
    const tierBadge = document.getElementById('deviceTier');
    tierBadge.className = 'device-tier-badge'; 
    if (device.tier === 'high') { tierBadge.classList.add('tier-high'); tierBadge.innerText = 'CẤU HÌNH CAO CẤP'; } 
    else if (device.tier === 'low') { tierBadge.classList.add('tier-low'); tierBadge.innerText = 'CẤU HÌNH ĐỜI THẤP'; } 
    else { tierBadge.classList.add('tier-mid'); tierBadge.innerText = 'CẤU HÌNH TẦM TRUNG'; }
    
    document.getElementById('sensWrapper').classList.add('active');
    
    for(let i = 0; i < 6; i++) {
        document.getElementById(`bar-${i+1}`).style.width = '0%';
        animateValue(`val-${i+1}`, 0, device.stats[i], 1200);
        setTimeout(() => { document.getElementById(`bar-${i+1}`).style.width = (device.stats[i]/200)*100 + '%'; }, 50);
    }
    
    animateValue('val-ttds', 0, device.ttds, 1200);
    animateValue('val-firebtn', 0, device.fireBtn, 1200);
}

function animateValue(id, start, end, duration) {
    if (animationIds[id]) cancelAnimationFrame(animationIds[id]); 
    
    const obj = document.getElementById(id);
    if(!obj) return;
    let startTimestamp = null;
    
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
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
