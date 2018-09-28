const cacheName = 'my-site-cache';

// install阶段
self.addEventListener('install', event => {
  console.log('sw event: install');
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
      const fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(function(response) {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(cacheName).then(function(cache) {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});
