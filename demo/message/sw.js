// installing
let env = 'dev'
self.addEventListener('install', () => {
  if (env === 'dev') {
    self.skipWaiting();
  }
  console.log('sw event: install');
});

// activated
self.addEventListener('activate', () => {
  console.log('sw event: activate');
  self.clients.matchAll().then(function(clients) {
    if (clients && clients.length) {
      clients.forEach(function(client) {
        // 发送字符串'sw.update'
        client.postMessage('注册成功填入');
      });
    }
  });
});

// fetch
self.addEventListener('fetch', () => {
  console.log('sw event: fetch');
});

self.addEventListener('message', evt => {
  console.log(`接受来自主线程的消息:${evt.data}`);
  evt.source.postMessage('我收到消息了，现在定向传回给你');
});
const bc = new BroadcastChannel('test');
const mc = new MessageChannel();
bc.onmessage = e => {
  console.log(`接受来自主线程的消息:${e.data}`);
  bc.postMessage('我收到消息了');
};
mc.port2.onmessage = e => {
  console.log(`接受来自主线程的消息:${e.data}`);
  mc.port2.postMessage('我收到消息了');
};
