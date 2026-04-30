const CACHE_NAME = 'dpi-v3-cache-v1';
const urlsToCache = [
  './index.html',
  './style.css',
  './script.js',
  './db.js',
  './manifest.json'
];

// Cài đặt Service Worker và lưu cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Phục vụ nội dung từ cache nếu offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; 
        }
        return fetch(event.request);
      }
    )
  );
});
