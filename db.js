// ==========================================
// 1. KHAI BÁO ICON & HÌNH ẢNH DÙNG CHUNG
// ==========================================
const appleSVG = `<svg viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9z"/></svg>`;
const androidSVG = `<svg viewBox="0 0 576 512"><path d="M420.22 166.3l37.83-65.53c2.25-3.88 1-8.84-2.88-11.08-3.87-2.24-8.83-1-11.08 2.89L405.6 159.2c-34.54-15.68-73.47-24.64-114.73-24.64-41.28 0-80.2 8.95-114.74 24.64l-38.5-66.62c-2.25-3.88-7.2-5.12-11.08-2.88-3.88 2.24-5.13 7.2-2.88 11.08l37.84 65.53C68.95 214.28 10.33 302.43 0 405.3h576c-10.3-102.87-68.94-191-155.78-239z"/></svg>`;

const ipImg = "https://img.icons8.com/color/96/iphone.png";
const ipadImg = "https://img.icons8.com/color/96/ipad.png";
const ssImg = "https://img.icons8.com/color/96/samsung.png";
const xmImg = "https://img.icons8.com/color/96/xiaomi.png"; 
const androidImg = "https://img.icons8.com/color/96/android-os.png";

// ==========================================
// 2. CƠ SỞ DỮ LIỆU THIẾT BỊ (MASTER DB)
// Cấu trúc stats: [Nhìn xung quanh, Hồng tâm, Ống 2x, Ống 4x, Súng ngắm, Nhìn tự do]
// ==========================================
const masterDB = [
    
    // ==========================================
    // KHU VỰC 1: APPLE (iOS) - iPHONE & iPAD
    // ==========================================
    { name: "iPhone 6 / 6 Plus", keywords: ["6", "ip 6", "iphone 6", "6 plus"], tier: "low", ttds: 120, fireBtn: 55, stats: [200, 200, 195, 195, 150, 180], os: "iOS", img: ipImg },
    { name: "iPhone 6s / 6s Plus", keywords: ["6s", "ip 6s", "iphone 6s", "6s plus"], tier: "low", ttds: 150, fireBtn: 52, stats: [200, 195, 190, 190, 140, 175], os: "iOS", img: ipImg },
    { name: "iPhone SE (Gen 1)", keywords: ["se 1", "se 2016", "ip se 1"], tier: "low", ttds: 165, fireBtn: 55, stats: [200, 200, 200, 200, 150, 180], os: "iOS", img: ipImg },
    { name: "iPhone 7 / 7 Plus", keywords: ["7", "ip 7", "iphone 7", "7 plus"], tier: "low", ttds: 200, fireBtn: 50, stats: [195, 190, 185, 180, 130, 170], os: "iOS", img: ipImg },
    { name: "iPhone 8 / 8 Plus", keywords: ["8", "ip 8", "iphone 8", "8 plus"], tier: "low", ttds: 250, fireBtn: 48, stats: [190, 185, 180, 175, 120, 160], os: "iOS", img: ipImg },
    
    { name: "iPhone X", keywords: ["x", "ip x", "iphone x"], tier: "mid", ttds: 320, fireBtn: 45, stats: [180, 175, 170, 165, 110, 150], os: "iOS", img: ipImg },
    { name: "iPhone XR", keywords: ["xr", "ip xr", "iphone xr"], tier: "mid", ttds: 350, fireBtn: 46, stats: [185, 180, 175, 170, 115, 155], os: "iOS", img: ipImg },
    { name: "iPhone XS / XS Max", keywords: ["xs", "xs max", "ip xs"], tier: "mid", ttds: 380, fireBtn: 42, stats: [170, 165, 160, 155, 100, 140], os: "iOS", img: ipImg },
    
    { name: "iPhone 11 / 11 Pro", keywords: ["11", "11 pro", "ip 11"], tier: "mid", ttds: 420, fireBtn: 43, stats: [170, 165, 160, 155, 100, 140], os: "iOS", img: ipImg },
    { name: "iPhone 11 Pro Max", keywords: ["11 pro max", "11 prm", "ip 11 prm"], tier: "mid", ttds: 480, fireBtn: 40, stats: [165, 160, 155, 150, 95, 135], os: "iOS", img: ipImg },
    { name: "iPhone SE (Gen 2)", keywords: ["se 2", "se 2020", "ip se 2"], tier: "mid", ttds: 400, fireBtn: 50, stats: [185, 180, 175, 170, 115, 155], os: "iOS", img: ipImg },
    
    { name: "iPhone 12 / 12 mini", keywords: ["12", "12 mini", "ip 12"], tier: "mid", ttds: 520, fireBtn: 44, stats: [170, 165, 160, 155, 100, 140], os: "iOS", img: ipImg },
    { name: "iPhone 12 Pro / 12 Pro Max", keywords: ["12 pro", "12 pro max", "12 prm", "ip 12 prm"], tier: "high", ttds: 600, fireBtn: 38, stats: [160, 155, 150, 145, 90, 130], os: "iOS", img: ipImg },
    
    { name: "iPhone 13 / 13 mini", keywords: ["13", "13 mini", "ip 13"], tier: "high", ttds: 650, fireBtn: 42, stats: [165, 160, 155, 150, 95, 135], os: "iOS", img: ipImg },
    { name: "iPhone 13 Pro", keywords: ["13 pro", "ip 13 pro"], tier: "high", ttds: 700, fireBtn: 40, stats: [155, 150, 145, 140, 85, 125], os: "iOS", img: ipImg },
    { name: "iPhone 13 Pro Max", keywords: ["13 pro max", "13 prm", "ip 13 prm"], tier: "high", ttds: 750, fireBtn: 35, stats: [150, 145, 140, 135, 80, 120], os: "iOS", img: ipImg },
    { name: "iPhone SE (Gen 3)", keywords: ["se 3", "se 2022", "ip se 3"], tier: "high", ttds: 680, fireBtn: 48, stats: [175, 170, 165, 160, 105, 145], os: "iOS", img: ipImg },

    { name: "iPhone 14 / 14 Plus", keywords: ["14", "14 plus", "ip 14"], tier: "high", ttds: 800, fireBtn: 38, stats: [155, 150, 145, 140, 85, 125], os: "iOS", img: ipImg },
    { name: "iPhone 14 Pro", keywords: ["14 pro", "ip 14 pro"], tier: "high", ttds: 850, fireBtn: 36, stats: [150, 145, 140, 135, 80, 120], os: "iOS", img: ipImg },
    { name: "iPhone 14 Pro Max", keywords: ["14 pro max", "14 prm", "ip 14 prm"], tier: "high", ttds: 880, fireBtn: 34, stats: [145, 140, 135, 130, 75, 115], os: "iOS", img: ipImg },

    { name: "iPhone 15 / 15 Plus", keywords: ["15", "15 plus", "ip 15"], tier: "high", ttds: 920, fireBtn: 36, stats: [150, 145, 140, 135, 80, 120], os: "iOS", img: ipImg },
    { name: "iPhone 15 Pro", keywords: ["15 pro", "ip 15 pro"], tier: "high", ttds: 950, fireBtn: 34, stats: [145, 140, 135, 130, 75, 115], os: "iOS", img: ipImg },
    { name: "iPhone 15 Pro Max", keywords: ["15 pro max", "15 prm", "ip 15 prm"], tier: "high", ttds: 980, fireBtn: 32, stats: [140, 135, 130, 125, 70, 110], os: "iOS", img: ipImg },

    { name: "iPhone 16 / 16 Plus", keywords: ["16", "16 plus", "ip 16"], tier: "high", ttds: 1020, fireBtn: 34, stats: [145, 140, 135, 130, 75, 115], os: "iOS", img: ipImg },
    { name: "iPhone 16 Pro", keywords: ["16 pro", "ip 16 pro"], tier: "high", ttds: 1050, fireBtn: 32, stats: [140, 135, 130, 125, 70, 110], os: "iOS", img: ipImg },
    { name: "iPhone 16 Pro Max", keywords: ["16 pro max", "16 prm", "ip 16 prm"], tier: "high", ttds: 1080, fireBtn: 30, stats: [135, 130, 125, 120, 65, 105], os: "iOS", img: ipImg },

    { name: "iPhone SE (Gen 4)", keywords: ["se 4", "ip se 4"], tier: "high", ttds: 950, fireBtn: 40, stats: [155, 150, 145, 140, 85, 125], os: "iOS", img: ipImg },

    { name: "iPhone 17 / 17 Air", keywords: ["17", "17 air", "ip 17"], tier: "high", ttds: 1120, fireBtn: 34, stats: [140, 135, 130, 125, 70, 110], os: "iOS", img: ipImg },
    { name: "iPhone 17 Pro", keywords: ["17 pro", "ip 17 pro"], tier: "high", ttds: 1150, fireBtn: 31, stats: [135, 130, 125, 120, 65, 105], os: "iOS", img: ipImg },
    { name: "iPhone 17 Pro Max", keywords: ["17 pro max", "17 prm", "ip 17 prm"], tier: "high", ttds: 1200, fireBtn: 30, stats: [130, 125, 120, 115, 60, 100], os: "iOS", img: ipImg },

    { name: "iPad (Gen 1-4)", keywords: ["ipad 1", "ipad 2", "ipad 3", "ipad 4", "ipad cũ"], tier: "low", ttds: 180, fireBtn: 65, stats: [200, 200, 200, 200, 180, 200], os: "iOS", img: ipadImg },
    { name: "iPad (Gen 5-8)", keywords: ["ipad 5", "ipad 6", "ipad 7", "ipad 8"], tier: "low", ttds: 300, fireBtn: 60, stats: [200, 195, 190, 185, 150, 180], os: "iOS", img: ipadImg },
    { name: "iPad (Gen 9-10)", keywords: ["ipad 9", "ipad 10"], tier: "mid", ttds: 480, fireBtn: 58, stats: [190, 185, 180, 175, 130, 160], os: "iOS", img: ipadImg },
    { name: "iPad Mini (1-4)", keywords: ["ipad mini 1", "ipad mini 2", "ipad mini 3", "ipad mini 4"], tier: "low", ttds: 200, fireBtn: 55, stats: [200, 200, 195, 190, 160, 180], os: "iOS", img: ipadImg },
    { name: "iPad Mini 5", keywords: ["ipad mini 5"], tier: "mid", ttds: 450, fireBtn: 50, stats: [185, 180, 175, 170, 120, 150], os: "iOS", img: ipadImg },
    { name: "iPad Mini 6/7", keywords: ["ipad mini 6", "ipad mini 7"], tier: "high", ttds: 750, fireBtn: 48, stats: [170, 165, 160, 155, 100, 140], os: "iOS", img: ipadImg },
    { name: "iPad Air 1/2", keywords: ["ipad air 1", "ipad air 2"], tier: "low", ttds: 250, fireBtn: 60, stats: [200, 195, 190, 185, 140, 170], os: "iOS", img: ipadImg },
    { name: "iPad Air 3/4/5", keywords: ["ipad air 3", "ipad air 4", "ipad air 5"], tier: "mid", ttds: 600, fireBtn: 55, stats: [180, 175, 170, 165, 110, 150], os: "iOS", img: ipadImg },
    { name: "iPad Air M2 / M3", keywords: ["ipad air m2", "ipad air m3", "ipad air 11", "ipad air 13"], tier: "high", ttds: 950, fireBtn: 52, stats: [165, 160, 155, 150, 95, 135], os: "iOS", img: ipadImg },
    { name: "iPad Pro 9.7 / 10.5", keywords: ["ipad pro 9.7", "ipad pro 10.5"], tier: "mid", ttds: 500, fireBtn: 55, stats: [185, 180, 175, 170, 115, 155], os: "iOS", img: ipadImg },
    { name: "iPad Pro 11 / 12.9", keywords: ["ipad pro 11", "ipad pro 12.9", "ipad pro gen"], tier: "high", ttds: 850, fireBtn: 50, stats: [160, 155, 150, 145, 90, 130], os: "iOS", img: ipadImg },
    { name: "iPad Pro M4", keywords: ["ipad pro m4", "ipad pro 13 m4", "ipad pro 11 m4"], tier: "high", ttds: 1200, fireBtn: 55, stats: [150, 145, 140, 135, 80, 120], os: "iOS", img: ipadImg },

    // ==========================================
    // KHU VỰC 2: SAMSUNG GALAXY (ANDROID)
    // ==========================================
    { name: "Galaxy S6 / S7 Series", keywords: ["s6", "s6 edge", "s7", "s7 edge"], tier: "low", ttds: 250, fireBtn: 55, stats: [195, 190, 185, 180, 130, 170], os: "Android", img: ssImg },
    { name: "Galaxy S8 / S9 Series", keywords: ["s8", "s8+", "s9", "s9+"], tier: "low", ttds: 300, fireBtn: 52, stats: [190, 185, 180, 175, 125, 165], os: "Android", img: ssImg },
    { name: "Galaxy S10 Series", keywords: ["s10", "s10+", "s10e", "s10 lite", "s10 5g"], tier: "mid", ttds: 420, fireBtn: 48, stats: [180, 175, 170, 165, 110, 150], os: "Android", img: ssImg },
    { name: "Galaxy S20 / S21 Series", keywords: ["s20", "s20+", "s20 fe", "s21", "s21+", "s21 fe"], tier: "high", ttds: 600, fireBtn: 44, stats: [165, 160, 155, 150, 95, 135], os: "Android", img: ssImg },
    { name: "Galaxy S20 / S21 Ultra", keywords: ["s20 ultra", "s21 ultra"], tier: "high", ttds: 700, fireBtn: 40, stats: [160, 155, 150, 145, 90, 130], os: "Android", img: ssImg },
    { name: "Galaxy S22 / S23 Series", keywords: ["s22", "s22+", "s23", "s23+", "s23 fe"], tier: "high", ttds: 800, fireBtn: 40, stats: [155, 150, 145, 140, 85, 125], os: "Android", img: ssImg },
    { name: "Galaxy S22 / S23 Ultra", keywords: ["s22 ultra", "s23 ultra"], tier: "high", ttds: 900, fireBtn: 36, stats: [150, 145, 140, 135, 80, 120], os: "Android", img: ssImg },
    { name: "Galaxy S24 / S25 / S26 Series", keywords: ["s24", "s24+", "s25", "s25+", "s25 slim", "s26", "s26+"], tier: "high", ttds: 1100, fireBtn: 36, stats: [145, 140, 135, 130, 75, 115], os: "Android", img: ssImg },
    { name: "Galaxy S24/S25/S26 Ultra", keywords: ["s24 ultra", "s25 ultra", "s26 ultra"], tier: "high", ttds: 1200, fireBtn: 34, stats: [140, 135, 130, 125, 70, 110], os: "Android", img: ssImg },
    
    { name: "Galaxy Note 4 / 5 / 7 / 8", keywords: ["note 4", "note 5", "note edge", "note 7", "note 8", "note fe"], tier: "low", ttds: 280, fireBtn: 52, stats: [190, 185, 180, 175, 125, 165], os: "Android", img: ssImg },
    { name: "Galaxy Note 9 / 10", keywords: ["note 9", "note 10", "note 10+", "note 10 lite"], tier: "mid", ttds: 500, fireBtn: 46, stats: [170, 165, 160, 155, 100, 140], os: "Android", img: ssImg },
    { name: "Galaxy Note 20 / 20 Ultra", keywords: ["note 20", "note 20 ultra"], tier: "high", ttds: 700, fireBtn: 42, stats: [160, 155, 150, 145, 90, 130], os: "Android", img: ssImg },
    
    { name: "Galaxy Z Fold / Flip (1-4)", keywords: ["z fold", "fold 2", "z fold 3", "z flip 3", "z fold 4", "z flip 4"], tier: "high", ttds: 750, fireBtn: 48, stats: [160, 155, 150, 145, 90, 130], os: "Android", img: ssImg },
    { name: "Galaxy Z Fold / Flip (5-7)", keywords: ["z fold 5", "z flip 5", "z fold 6", "z flip 6", "fold6 special edition", "z fold 7", "z flip 7"], tier: "high", ttds: 1050, fireBtn: 45, stats: [145, 140, 135, 130, 75, 115], os: "Android", img: ssImg },

    { name: "Galaxy A (Đời cũ)", keywords: ["a3", "a5", "a7", "a8", "a9", "a10", "a20", "a30", "a40"], tier: "low", ttds: 200, fireBtn: 55, stats: [195, 190, 185, 180, 130, 170], os: "Android", img: ssImg },
    { name: "Galaxy A50 -> A90", keywords: ["a50", "a70", "a80", "a90"], tier: "mid", ttds: 350, fireBtn: 50, stats: [185, 180, 175, 170, 115, 155], os: "Android", img: ssImg },
    { name: "Galaxy A11 -> A36", keywords: ["a11", "a21", "a31", "a12", "a22", "a32", "a13", "a23", "a33", "a14", "a24", "a34", "a15", "a25", "a35", "a16", "a26", "a36"], tier: "low", ttds: 250, fireBtn: 50, stats: [190, 185, 180, 175, 120, 160], os: "Android", img: ssImg },
    { name: "Galaxy A51 -> A56 / A71 -> A73", keywords: ["a51", "a71", "a52", "a72", "a53", "a73", "a54", "a55", "a56"], tier: "mid", ttds: 500, fireBtn: 45, stats: [175, 170, 165, 160, 105, 145], os: "Android", img: ssImg },
    
    { name: "Galaxy M Series", keywords: ["m10", "m20", "m30", "m40", "m11", "m21", "m31", "m51", "m12", "m22", "m32", "m52", "m13", "m23", "m33", "m53", "m14", "m34", "m54", "m15", "m35", "m55"], tier: "mid", ttds: 400, fireBtn: 48, stats: [180, 175, 170, 165, 110, 150], os: "Android", img: ssImg },
    
    { name: "Galaxy Tab A / S FE", keywords: ["tab a", "tab a7", "tab a8", "tab a9", "tab s6 fe", "tab s7 fe", "tab s9 fe"], tier: "mid", ttds: 300, fireBtn: 60, stats: [195, 190, 185, 180, 130, 170], os: "Android", img: ssImg },
    { name: "Galaxy Tab S (S2-S10)", keywords: ["tab s2", "tab s3", "tab s4", "tab s5e", "tab s6", "tab s7", "tab s8", "tab s9", "tab s10"], tier: "high", ttds: 800, fireBtn: 55, stats: [165, 160, 155, 150, 95, 135], os: "Android", img: ssImg },
    { name: "Galaxy Tab S Ultra", keywords: ["tab s8 ultra", "tab s9 ultra", "tab s10 ultra"], tier: "high", ttds: 1200, fireBtn: 60, stats: [160, 155, 150, 145, 90, 130], os: "Android", img: ssImg },

    // ==========================================
    // KHU VỰC 3: OPPO (ANDROID)
    // ==========================================
    { name: "OPPO Find 7 / 7a", keywords: ["find 7", "find 7a"], tier: "low", ttds: 200, fireBtn: 55, stats: [200, 200, 195, 190, 150, 180], os: "Android", img: androidImg },
    { name: "OPPO Find X / X2 Series", keywords: ["find x", "find x2", "find x2 pro"], tier: "mid", ttds: 500, fireBtn: 48, stats: [180, 175, 170, 165, 110, 150], os: "Android", img: androidImg },
    { name: "OPPO Find X3 / X5 / X6 Series", keywords: ["find x3", "find x3 pro", "find x5", "find x5 pro", "find x6", "find x6 pro"], tier: "high", ttds: 850, fireBtn: 40, stats: [155, 150, 145, 140, 85, 125], os: "Android", img: androidImg },
    { name: "OPPO Find X7 / X8 / X9 Series", keywords: ["find x7 ultra", "find x8", "find x8 pro", "find x9", "find x9 pro"], tier: "high", ttds: 1100, fireBtn: 35, stats: [145, 140, 135, 130, 75, 115], os: "Android", img: androidImg },
    
    { name: "OPPO Find N Series (Gập)", keywords: ["find n", "find n2", "find n2 flip", "find n3", "find n3 flip", "find n5", "find n5 flip"], tier: "high", ttds: 900, fireBtn: 45, stats: [155, 150, 145, 140, 85, 125], os: "Android", img: androidImg },

    { name: "OPPO Reno 1 -> 3 Series", keywords: ["reno", "reno 10x", "reno2", "reno2 f", "reno3", "reno3 pro"], tier: "low", ttds: 300, fireBtn: 50, stats: [190, 185, 180, 175, 125, 165], os: "Android", img: androidImg },
    { name: "OPPO Reno 4 -> 8 Series", keywords: ["reno4", "reno4 pro", "reno5", "reno5 pro", "reno6", "reno6 z", "reno6 pro", "reno7", "reno7 z", "reno7 pro", "reno8", "reno8 t", "reno8 pro"], tier: "mid", ttds: 500, fireBtn: 45, stats: [175, 170, 165, 160, 105, 145], os: "Android", img: androidImg },
    { name: "OPPO Reno 9 -> 13 Series", keywords: ["reno9", "reno9 pro", "reno10", "reno10 pro", "reno10 pro+", "reno11", "reno11 f", "reno11 pro", "reno12", "reno12 f", "reno12 pro", "reno13", "reno13 pro"], tier: "high", ttds: 800, fireBtn: 40, stats: [160, 155, 150, 145, 90, 130], os: "Android", img: androidImg },

    { name: "OPPO A (Đời Cũ)", keywords: ["a37", "neo 9", "a3s", "a5s", "a7", "a71", "a83"], tier: "low", ttds: 150, fireBtn: 55, stats: [200, 200, 195, 190, 150, 180], os: "Android", img: androidImg },
    { name: "OPPO A (Tầm Trung)", keywords: ["a31", "a52", "a53", "a54", "a9", "a91", "a92", "a93", "a55", "a57", "a58", "a60", "a74", "a76", "a77s", "a78", "a79", "a94", "a95", "a96", "a98"], tier: "mid", ttds: 350, fireBtn: 48, stats: [185, 180, 175, 170, 115, 155], os: "Android", img: androidImg },
    
    { name: "OPPO F Series (Selfie)", keywords: ["f1", "f1s", "f3", "f3 plus", "f5", "f5 youth", "f7", "f9", "f11", "f11 pro"], tier: "mid", ttds: 250, fireBtn: 52, stats: [195, 190, 185, 180, 130, 170], os: "Android", img: androidImg },

    { name: "OPPO Pad Series", keywords: ["pad air", "pad neo", "oppo pad", "pad 2", "pad 3"], tier: "high", ttds: 600, fireBtn: 58, stats: [175, 170, 165, 160, 105, 145], os: "Android", img: androidImg },

    // ==========================================
    // KHU VỰC 4: REALME (ANDROID)
    // ==========================================
    { name: "Realme GT / GT Neo Series", keywords: ["realme gt", "gt 2", "gt 3", "gt 5", "gt 6", "gt 7", "gt 8", "gt neo", "neo 2", "neo 3", "neo 5", "neo 6"], tier: "high", ttds: 900, fireBtn: 38, stats: [155, 150, 145, 140, 85, 125], os: "Android", img: androidImg },
    { name: "Realme 1 -> 8 Series", keywords: ["realme 1", "realme 2", "realme 3", "realme 5", "realme 6", "realme 7", "realme 8"], tier: "low", ttds: 300, fireBtn: 50, stats: [190, 185, 180, 175, 125, 165], os: "Android", img: androidImg },
    { name: "Realme 9 -> 14 Series", keywords: ["realme 9", "realme 10", "realme 11", "realme 12", "realme 13", "realme 14"], tier: "high", ttds: 650, fireBtn: 42, stats: [165, 160, 155, 150, 95, 135], os: "Android", img: androidImg },
    { name: "Realme C Series", keywords: ["c1", "c2", "c3", "c11", "c12", "c15", "c17", "c20", "c21", "c25", "c30", "c31", "c33", "c35", "c51", "c53", "c55", "c61", "c63", "c65", "c67"], tier: "low", ttds: 250, fireBtn: 52, stats: [195, 190, 185, 180, 130, 170], os: "Android", img: androidImg },
    { name: "Realme Narzo Series", keywords: ["narzo 10", "narzo 20", "narzo 30", "narzo 50", "narzo 60", "narzo 70"], tier: "mid", ttds: 450, fireBtn: 46, stats: [175, 170, 165, 160, 105, 145], os: "Android", img: androidImg },
    { name: "Realme Pad", keywords: ["realme pad", "pad mini", "pad x", "pad 2", "pad 3"], tier: "mid", ttds: 500, fireBtn: 58, stats: [180, 175, 170, 165, 110, 150], os: "Android", img: androidImg },

    // ==========================================
    // KHU VỰC 5: VIVO & iQOO (ANDROID)
    // ==========================================
    { name: "Vivo X5 -> X30 Series", keywords: ["x5", "x6", "x7", "x9", "x20", "x21", "x23", "x27", "x30"], tier: "mid", ttds: 500, fireBtn: 48, stats: [180, 175, 170, 165, 110, 150], os: "Android", img: androidImg },
    { name: "Vivo X50 -> X70 Series", keywords: ["x50", "x60", "x70", "vivo x50", "vivo x60", "vivo x70"], tier: "high", ttds: 750, fireBtn: 42, stats: [165, 160, 155, 150, 95, 135], os: "Android", img: androidImg },
    { name: "Vivo X80 / X90 Series", keywords: ["x80", "x90", "vivo x80", "vivo x90"], tier: "high", ttds: 900, fireBtn: 38, stats: [155, 150, 145, 140, 85, 125], os: "Android", img: androidImg },
    { name: "Vivo X100 / X200 / X300", keywords: ["x100", "x200", "x300", "vivo x100", "vivo x200", "vivo x300"], tier: "high", ttds: 1100, fireBtn: 35, stats: [145, 140, 135, 130, 75, 115], os: "Android", img: androidImg },
    { name: "Vivo X Fold / Flip Series", keywords: ["x fold", "x flip", "fold2", "fold3", "fold 5", "flip 3"], tier: "high", ttds: 1000, fireBtn: 46, stats: [150, 145, 140, 135, 80, 120], os: "Android", img: androidImg },

    { name: "Vivo V1 -> V19", keywords: ["v1", "v3", "v5", "v7", "v9", "v11", "v15", "v17", "v19"], tier: "low", ttds: 250, fireBtn: 52, stats: [195, 190, 185, 180, 130, 170], os: "Android", img: androidImg },
    { name: "Vivo V20 -> V27 Series", keywords: ["v20", "v21", "v23", "v25", "v27"], tier: "mid", ttds: 450, fireBtn: 46, stats: [180, 175, 170, 165, 110, 150], os: "Android", img: androidImg },
    { name: "Vivo V29 / V30 / V31", keywords: ["v29", "v30", "v31"], tier: "high", ttds: 650, fireBtn: 44, stats: [170, 165, 160, 155, 100, 140], os: "Android", img: androidImg },
    { name: "Vivo V40 / V50 / V60 / V70", keywords: ["v40", "v50", "v60", "v70"], tier: "high", ttds: 850, fireBtn: 40, stats: [160, 155, 150, 145, 90, 130], os: "Android", img: androidImg },

    { name: "Vivo Y (Đời cũ)", keywords: ["y11", "y12", "y15", "y17", "y19", "y50", "y51", "y53", "y55", "y71", "y81", "y91", "y93", "y95"], tier: "low", ttds: 180, fireBtn: 55, stats: [200, 200, 195, 195, 150, 180], os: "Android", img: androidImg },
    { name: "Vivo Y20 -> Y36", keywords: ["y20", "y21", "y22", "y30", "y31", "y33", "y35", "y36"], tier: "low", ttds: 250, fireBtn: 52, stats: [195, 190, 185, 180, 130, 170], os: "Android", img: androidImg },
    { name: "Vivo Y72 -> Y76 / Y0x", keywords: ["y72", "y73", "y75", "y76", "y01", "y02", "y03", "y05"], tier: "mid", ttds: 350, fireBtn: 50, stats: [185, 180, 175, 170, 115, 155], os: "Android", img: androidImg },
    { name: "Vivo Y100 / Y200 / Y300", keywords: ["y100", "y200", "y300", "y39", "y29", "y19s"], tier: "mid", ttds: 480, fireBtn: 46, stats: [175, 170, 165, 160, 105, 145], os: "Android", img: androidImg },

    { name: "Vivo T Series", keywords: ["vivo t1", "vivo t2", "vivo t3", "vivo t4"], tier: "high", ttds: 600, fireBtn: 44, stats: [170, 165, 160, 155, 100, 140], os: "Android", img: androidImg },
    { name: "Vivo S Series", keywords: ["s1", "s7", "s9", "s10", "s12", "s15", "s16", "s17", "s18", "s19"], tier: "high", ttds: 650, fireBtn: 42, stats: [165, 160, 155, 150, 95, 135], os: "Android", img: androidImg },

    { name: "iQOO (Đời 1-5)", keywords: ["iqoo 3", "iqoo 5"], tier: "high", ttds: 700, fireBtn: 40, stats: [160, 155, 150, 145, 90, 130], os: "Android", img: androidImg },
    { name: "iQOO (Đời 7-13)", keywords: ["iqoo 7", "iqoo 8", "iqoo 9", "iqoo 10", "iqoo 11", "iqoo 12", "iqoo 13"], tier: "high", ttds: 1100, fireBtn: 36, stats: [145, 140, 135, 130, 75, 115], os: "Android", img: androidImg },
    { name: "iQOO Neo Series", keywords: ["iqoo neo 3", "neo 5", "neo 6", "neo 7", "neo 8", "neo 9", "neo 10"], tier: "high", ttds: 900, fireBtn: 38, stats: [150, 145, 140, 135, 80, 120], os: "Android", img: androidImg },
    { name: "iQOO Z Series", keywords: ["iqoo z1", "z3", "z5", "z6", "z7", "z8", "z9", "z10"], tier: "mid", ttds: 600, fireBtn: 44, stats: [165, 160, 155, 150, 95, 135], os: "Android", img: androidImg },

    { name: "Vivo Pad / Pad Air / SE", keywords: ["vivo pad", "pad air", "pad se"], tier: "mid", ttds: 500, fireBtn: 60, stats: [180, 175, 170, 165, 110, 150], os: "Android", img: androidImg },
    { name: "Vivo Pad 2/3 / iQOO Pad", keywords: ["vivo pad 2", "pad 3 pro", "pad 5 pro", "iqoo pad", "iqoo pad 2"], tier: "high", ttds: 850, fireBtn: 55, stats: [165, 160, 155, 150, 95, 135], os: "Android", img: androidImg },

    // ==========================================
    // KHU VỰC 6: XIAOMI, REDMI & POCO (ANDROID)
    // ==========================================
    { name: "Black Shark 1 / 2 Series", keywords: ["black shark 1", "black shark 2", "black shark 2 pro"], tier: "high", ttds: 700, fireBtn: 40, stats: [150, 145, 140, 135, 80, 120], os: "Android", img: xmImg },
    { name: "Black Shark 3 / 4 / 5 Series", keywords: ["black shark 3", "black shark 4", "black shark 5"], tier: "high", ttds: 1100, fireBtn: 36, stats: [135, 130, 125, 120, 65, 105], os: "Android", img: xmImg },

    { name: "Mi 4 -> Mi 9 Series", keywords: ["mi 4", "mi 5", "mi 6", "mi 8", "mi 9"], tier: "mid", ttds: 400, fireBtn: 48, stats: [180, 175, 170, 165, 110, 150], os: "Android", img: xmImg },
    { name: "Mi 10 / 11 Series", keywords: ["mi 10", "mi 11", "xiaomi 11t"], tier: "high", ttds: 750, fireBtn: 42, stats: [160, 155, 150, 145, 90, 130], os: "Android", img: xmImg },
    { name: "Xiaomi 12 / 13 Series", keywords: ["xiaomi 12", "xiaomi 13"], tier: "high", ttds: 900, fireBtn: 38, stats: [150, 145, 140, 135, 80, 120], os: "Android", img: xmImg },
    { name: "Xiaomi 14 / 15 / 16 Series", keywords: ["xiaomi 14", "xiaomi 15", "xiaomi 16"], tier: "high", ttds: 1150, fireBtn: 35, stats: [140, 135, 130, 125, 70, 110], os: "Android", img: xmImg },
    { name: "Mi MIX / Fold Series", keywords: ["mix", "mix 2", "mix 3", "mix 4", "mix fold", "mix flip"], tier: "high", ttds: 850, fireBtn: 45, stats: [155, 150, 145, 140, 85, 125], os: "Android", img: xmImg },

    { name: "Redmi K20 / K30", keywords: ["k20", "k30"], tier: "mid", ttds: 500, fireBtn: 46, stats: [175, 170, 165, 160, 105, 145], os: "Android", img: xmImg },
    { name: "Redmi K40 / K50 Series", keywords: ["k40", "k50"], tier: "high", ttds: 800, fireBtn: 40, stats: [155, 150, 145, 140, 85, 125], os: "Android", img: xmImg },
    { name: "Redmi K60 / K70 / K80 / K90", keywords: ["k60", "k70", "k80", "k90"], tier: "high", ttds: 1050, fireBtn: 36, stats: [145, 140, 135, 130, 75, 115], os: "Android", img: xmImg },

    { name: "POCO F Series", keywords: ["poco f1", "poco f2", "poco f3", "poco f4", "poco f5", "poco f6", "poco f7", "poco f8"], tier: "high", ttds: 850, fireBtn: 40, stats: [155, 150, 145, 140, 85, 125], os: "Android", img: xmImg },
    { name: "POCO X Series", keywords: ["poco x2", "poco x3", "poco x4", "poco x5", "poco x6", "poco x7"], tier: "high", ttds: 700, fireBtn: 44, stats: [165, 160, 155, 150, 95, 135], os: "Android", img: xmImg },
    { name: "POCO M & C Series", keywords: ["poco m2", "poco m3", "poco m4", "poco m5", "poco m6", "poco m7", "poco c3", "poco c40", "poco c50", "poco c55", "poco c65", "poco c75"], tier: "low", ttds: 300, fireBtn: 50, stats: [185, 180, 175, 170, 115, 155], os: "Android", img: xmImg },

    { name: "Redmi Note 4 -> 8 Series", keywords: ["note 4", "note 5", "note 6", "note 7", "note 8", "redmi note 8"], tier: "low", ttds: 250, fireBtn: 52, stats: [195, 190, 185, 180, 130, 170], os: "Android", img: xmImg },
    { name: "Redmi Note 9 -> 12 Series", keywords: ["note 9", "note 10", "note 11", "note 12", "redmi note 12"], tier: "mid", ttds: 450, fireBtn: 48, stats: [175, 170, 165, 160, 105, 145], os: "Android", img: xmImg },
    { name: "Redmi Note 13 -> 16 Series", keywords: ["note 13", "note 14", "note 15", "note 16"], tier: "high", ttds: 700, fireBtn: 44, stats: [160, 155, 150, 145, 90, 130], os: "Android", img: xmImg },

    { name: "Redmi 4 -> 9 Series", keywords: ["redmi 4", "redmi 5", "redmi 6", "redmi 7", "redmi 8", "redmi 9", "redmi a1", "redmi a2"], tier: "low", ttds: 180, fireBtn: 55, stats: [200, 200, 195, 195, 150, 180], os: "Android", img: xmImg },
    { name: "Redmi 10 -> 14 Series", keywords: ["redmi 10", "redmi 12", "redmi 13", "redmi 14", "redmi a3", "redmi a4"], tier: "low", ttds: 300, fireBtn: 52, stats: [190, 185, 180, 175, 125, 165], os: "Android", img: xmImg },

    { name: "Mi Pad 1-4 / Redmi Pad", keywords: ["mi pad 1", "mi pad 2", "mi pad 3", "mi pad 4", "redmi pad"], tier: "mid", ttds: 450, fireBtn: 60, stats: [185, 180, 175, 170, 120, 150], os: "Android", img: xmImg },
    { name: "Xiaomi Pad 5/6/7 / POCO Pad", keywords: ["pad 5", "pad 6", "pad 7", "poco pad"], tier: "high", ttds: 850, fireBtn: 55, stats: [165, 160, 155, 150, 95, 135], os: "Android", img: xmImg },

    // ==========================================
    // KHU VỰC 7: HUAWEI (ANDROID)
    // ==========================================
    { name: "Huawei P7 -> P20 Series", keywords: ["p7", "p8", "p9", "p10", "p20", "p20 pro", "p20 lite"], tier: "low", ttds: 250, fireBtn: 52, stats: [195, 190, 185, 180, 130, 170], os: "Android", img: androidImg },
    { name: "Huawei P30 / P40 Series", keywords: ["p30", "p30 pro", "p40", "p40 pro"], tier: "mid", ttds: 480, fireBtn: 46, stats: [175, 170, 165, 160, 105, 145], os: "Android", img: androidImg },
    { name: "Huawei P50 / P60 Series", keywords: ["p50", "p50 pro", "p60", "p60 pro", "p50 pocket"], tier: "high", ttds: 800, fireBtn: 40, stats: [160, 155, 150, 145, 90, 130], os: "Android", img: androidImg },
    { name: "Huawei Pura 70 / 80 Series", keywords: ["pura 70", "pura 80", "pura 70 ultra", "pura 80 ultra"], tier: "high", ttds: 1100, fireBtn: 36, stats: [145, 140, 135, 130, 75, 115], os: "Android", img: androidImg },

    { name: "Huawei Mate 7 -> Mate 20", keywords: ["mate 7", "mate 8", "mate 9", "mate 10", "mate 20", "mate 20 pro"], tier: "low", ttds: 300, fireBtn: 50, stats: [190, 185, 180, 175, 125, 165], os: "Android", img: androidImg },
    { name: "Huawei Mate 30 / Mate 40", keywords: ["mate 30", "mate 40", "mate 30 pro", "mate 40 pro"], tier: "mid", ttds: 550, fireBtn: 44, stats: [170, 165, 160, 155, 100, 140], os: "Android", img: androidImg },
    { name: "Huawei Mate 50 / Mate 60", keywords: ["mate 50", "mate 60", "mate 50 pro", "mate 60 pro", "ultimate design"], tier: "high", ttds: 900, fireBtn: 38, stats: [155, 150, 145, 140, 85, 125], os: "Android", img: androidImg },
    { name: "Huawei Mate 70 / Mate 80", keywords: ["mate 70", "mate 80", "mate 70 pro", "mate 80 pro"], tier: "high", ttds: 1200, fireBtn: 35, stats: [140, 135, 130, 125, 70, 110], os: "Android", img: androidImg },

    { name: "Huawei Mate X Series (Gập)", keywords: ["mate x", "mate xs", "mate x2", "mate x3", "mate x5", "mate x6", "mate x7", "mate xt"], tier: "high", ttds: 1050, fireBtn: 46, stats: [150, 145, 140, 135, 80, 120], os: "Android", img: androidImg },

    { name: "Huawei Nova 1 -> Nova 5", keywords: ["nova", "nova 2", "nova 3", "nova 4", "nova 5", "nova 3i"], tier: "low", ttds: 250, fireBtn: 52, stats: [195, 190, 185, 180, 130, 170], os: "Android", img: androidImg },
    { name: "Huawei Nova 6 -> Nova 10", keywords: ["nova 6", "nova 7", "nova 8", "nova 9", "nova 10"], tier: "mid", ttds: 450, fireBtn: 48, stats: [180, 175, 170, 165, 110, 150], os: "Android", img: androidImg },
    { name: "Huawei Nova 11 -> Nova 15", keywords: ["nova 11", "nova 12", "nova 13", "nova 14", "nova 15"], tier: "high", ttds: 750, fireBtn: 42, stats: [165, 160, 155, 150, 95, 135], os: "Android", img: androidImg },

    { name: "Huawei Enjoy (Đời cũ)", keywords: ["enjoy 5", "enjoy 6", "enjoy 7", "enjoy 8", "enjoy 9", "enjoy 10", "enjoy 20"], tier: "low", ttds: 200, fireBtn: 55, stats: [200, 200, 195, 195, 150, 180], os: "Android", img: androidImg },
    { name: "Huawei Enjoy 50 -> 80", keywords: ["enjoy 50", "enjoy 60", "enjoy 70", "enjoy 80"], tier: "mid", ttds: 350, fireBtn: 50, stats: [185, 180, 175, 170, 115, 155], os: "Android", img: androidImg },

    { name: "MediaPad / MatePad SE", keywords: ["mediapad", "matepad se", "matepad t8", "matepad t10"], tier: "low", ttds: 250, fireBtn: 60, stats: [200, 195, 190, 185, 140, 170], os: "Android", img: androidImg },
    { name: "MatePad 10.4 / 11 / Air", keywords: ["matepad 10.4", "matepad 10.8", "matepad 11", "matepad air", "matepad paper"], tier: "mid", ttds: 500, fireBtn: 58, stats: [180, 175, 170, 165, 110, 150], os: "Android", img: androidImg },
    { name: "MatePad Pro / 12 Series", keywords: ["matepad pro", "matepad 12", "matepad 11.5"], tier: "high", ttds: 850, fireBtn: 55, stats: [160, 155, 150, 145, 90, 130], os: "Android", img: androidImg },

    // ==========================================
    // KHU VỰC 8: GOOGLE PIXEL (ANDROID)
    // ==========================================
    { name: "Nexus 6 / 5X / 6P", keywords: ["nexus 6", "nexus 5x", "nexus 6p"], tier: "low", ttds: 150, fireBtn: 55, stats: [200, 200, 195, 195, 150, 180], os: "Android", img: androidImg },

    { name: "Pixel 3a -> 5a", keywords: ["pixel 3a", "pixel 3a xl", "pixel 4a", "pixel 5a"], tier: "low", ttds: 220, fireBtn: 52, stats: [195, 190, 185, 180, 130, 170], os: "Android", img: androidImg },
    { name: "Pixel 6a / 7a", keywords: ["pixel 6a", "pixel 7a"], tier: "mid", ttds: 450, fireBtn: 48, stats: [180, 175, 170, 165, 110, 150], os: "Android", img: androidImg },
    { name: "Pixel 8a / 9a / 10a", keywords: ["pixel 8a", "pixel 9a", "pixel 10a"], tier: "high", ttds: 650, fireBtn: 45, stats: [165, 160, 155, 150, 95, 135], os: "Android", img: androidImg },

    { name: "Pixel 1 -> 3 XL", keywords: ["pixel 1", "pixel xl", "pixel 2", "pixel 2 xl", "pixel 3", "pixel 3 xl"], tier: "low", ttds: 250, fireBtn: 50, stats: [190, 185, 180, 175, 125, 165], os: "Android", img: androidImg },
    { name: "Pixel 4 / 5 Series", keywords: ["pixel 4", "pixel 4 xl", "pixel 5"], tier: "mid", ttds: 500, fireBtn: 46, stats: [175, 170, 165, 160, 105, 145], os: "Android", img: androidImg },
    
    { name: "Pixel 6 / 6 Pro", keywords: ["pixel 6", "pixel 6 pro"], tier: "high", ttds: 750, fireBtn: 42, stats: [155, 150, 145, 140, 85, 125], os: "Android", img: androidImg },
    { name: "Pixel 7 / 7 Pro", keywords: ["pixel 7", "pixel 7 pro"], tier: "high", ttds: 850, fireBtn: 40, stats: [150, 145, 140, 135, 80, 120], os: "Android", img: androidImg },
    { name: "Pixel 8 / 8 Pro", keywords: ["pixel 8", "pixel 8 pro"], tier: "high", ttds: 950, fireBtn: 38, stats: [145, 140, 135, 130, 75, 115], os: "Android", img: androidImg },
    { name: "Pixel 9 / 9 Pro Series", keywords: ["pixel 9", "pixel 9 pro", "pixel 9 pro xl"], tier: "high", ttds: 1100, fireBtn: 36, stats: [140, 135, 130, 125, 70, 110], os: "Android", img: androidImg },
    { name: "Pixel 10 / 10 Pro Series", keywords: ["pixel 10", "pixel 10 pro", "pixel 10 pro xl"], tier: "high", ttds: 1250, fireBtn: 34, stats: [135, 130, 125, 120, 65, 105], os: "Android", img: androidImg },

    { name: "Pixel Fold / Pro Fold", keywords: ["pixel fold", "pixel 9 pro fold", "pixel 10 pro fold"], tier: "high", ttds: 1000, fireBtn: 46, stats: [150, 145, 140, 135, 80, 120], os: "Android", img: androidImg },

    { name: "Pixel C / Slate", keywords: ["pixel c", "pixel slate"], tier: "mid", ttds: 400, fireBtn: 62, stats: [185, 180, 175, 170, 120, 160], os: "Android", img: androidImg },
    { name: "Pixel Tablet", keywords: ["pixel tablet"], tier: "high", ttds: 700, fireBtn: 58, stats: [160, 155, 150, 145, 90, 130], os: "Android", img: androidImg }

];
