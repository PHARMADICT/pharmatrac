/* PharmaTrack v3 · Service Worker · Offline-First */
const CACHE = 'pharmatrack-v3-shell';

const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

const CDN_CACHE = 'pharmatrack-v3-cdn';
const CDN_URLS = [
  'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;600;700;800&display=swap',
];

/* ── Install: precache shell ── */
self.addEventListener('install', e => {
  e.waitUntil(
    Promise.allSettled([
      caches.open(CACHE).then(c =>
        Promise.allSettled(PRECACHE.map(url => c.add(new Request(url, { cache: 'reload' }))))
      ),
      caches.open(CDN_CACHE).then(c =>
        Promise.allSettled(CDN_URLS.map(url => c.add(new Request(url, { mode: 'no-cors' }))))
      ),
    ])
  );
  self.skipWaiting();
});

/* ── Activate: clean stale caches ── */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE && k !== CDN_CACHE)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ── Fetch: cache-first for shell + CDN, network-first for everything else ── */
self.addEventListener('fetch', e => {
  const { request } = e;
  const url = new URL(request.url);

  // App shell — cache first
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(request, clone));
          }
          return res;
        }).catch(() => caches.match('/index.html'));
      })
    );
    return;
  }

  // CDN (fonts, scripts) — cache first, no-cors
  if (CDN_URLS.some(u => request.url.startsWith(u.split('?')[0])) ||
      request.url.includes('fonts.googleapis.com') ||
      request.url.includes('fonts.gstatic.com') ||
      request.url.includes('unpkg.com')) {
    e.respondWith(
      caches.open(CDN_CACHE).then(c =>
        c.match(request).then(cached => {
          if (cached) return cached;
          return fetch(request, { mode: 'no-cors' }).then(res => {
            if (res) c.put(request, res.clone());
            return res;
          }).catch(() => cached);
        })
      )
    );
    return;
  }

  // Everything else — network first
  e.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});

/* ── Background sync placeholder ── */
self.addEventListener('sync', e => {
  if (e.tag === 'sync-history') {
    // Reserved for future cloud sync
    console.log('[SW] Background sync triggered');
  }
});
