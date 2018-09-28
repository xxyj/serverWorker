const cacheUrl = [
  'https://farm2.staticflickr.com/1891/44718016261_7a3cb1fcde_c.jpg',
  './',
];
const cacheName = 'my-site-cache';

// install阶段
self.addEventListener('install', event => {
  console.log('sw event: install');
  event.waitUntil(
    caches.open('cacheName').then(cache => {
      console.log('open cache');
      // 异步非必须的
      // cache.addAll(cacheUrl);
      // 必须的
      return cache.addAll(cacheUrl);
    })
  );
});

self.addEventListener('activate', () => {
  console.log('sw event: activate');
});

self.addEventListener('fetch', event => {
  console.log('sw event: fetch');
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
    })
  );
});
