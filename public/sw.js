let cacheName = "reactPwa"
const filesToCache = [
  "/",
  "/index.html",
  "/static/js/0.chunk.js",
  "/static/js/main.chunk.js",
  "/static/js/bundle.js",
  "/favicon.ico",
  "/logo192.png",
  "/logo512.png",
  "/manifest.json",
  "/users",
]

// Cache files on install
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(filesToCache)
    })
  )
})

// Get cache data
this.addEventListener("fetch", (event) => {
  // If user is offline
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response
        }
        // Re render code if data is present
        const fetchDataAgain = event.request.clone()
        fetch(fetchDataAgain)
      })
    )
  }
})
