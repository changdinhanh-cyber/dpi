const CACHE_NAME = 'dpi-app-v1';

// Lắng nghe sự kiện cài đặt
self.addEventListener('install', event => {
    self.skipWaiting();
});

// Chạy ngầm xử lý dữ liệu
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => new Response('Ứng dụng đang ngoại tuyến'))
    );
});
