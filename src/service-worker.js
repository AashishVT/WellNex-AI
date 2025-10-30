const CACHE_NAME = 'wellnex-static-v1'
const ASSETS = [
  '/',
  '/index.html',
  '/src/main.jsx',
  '/branding/favicon.svg'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  )
})
