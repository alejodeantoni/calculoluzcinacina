const CACHE = 'luz-barrio-v3.3.0';
const ASSETS = ['./', './index.html', './manifest.json', './sw.js'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  if(e.request.url.includes('jsonbin.io') || 
     e.request.url.includes('fonts.googleapis.com') || 
     e.request.url.includes('cdnjs.cloudflare.com') ||
     e.request.url.includes('dolarapi.com') ||
     e.request.url.includes('bluelytics.com')) return;

  // Siempre network-first para index.html — así siempre baja la última versión
  const url = new URL(e.request.url);
  const isCore = url.pathname.endsWith('/') || 
                 url.pathname.endsWith('index.html') || 
                 url.pathname.endsWith('sw.js') ||
                 url.pathname.endsWith('manifest.json');

  if(isCore){
    e.respondWith(
      fetch(e.request, {cache: 'no-store'}).then(resp => {
        if(resp && resp.status === 200){
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});
