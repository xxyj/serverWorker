// installing
self.addEventListener('install', () => {
  console.log('sw event: install');
});

// activated 
self.addEventListener('activate', () => {
  console.log('sw event: activate');
});

// fetch 
self.addEventListener('fetch', () => {
  console.log('sw event: fetch');
});

self.addEventListener('message', () => {
  console.log('sw event: message'); 
});

self.addEventListener('push', () => {
  console.log('sw event: push');
});

self.addEventListener('sync', () => {
  debugger
  console.log('sw event: sync');
});