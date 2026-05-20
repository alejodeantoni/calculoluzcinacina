const CACHE = 'luz-barrio-v2.1.0';
const ASSETS = ['./', './index.html', './manifest.json', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, {mode:'no-cors'})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  if(e.request.url.includes('jsonbin.io') || e.request.url.includes('fonts.googleapis.com') || e.request.url.includes('cdnjs.cloudflare.com')) return;
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {
    if(resp && resp.status === 200) { const clone = resp.clone(); caches.open(CACHE).then(c => c.put(e.request, clone)); }
    return resp;
  }).catch(() => cached)));
});
