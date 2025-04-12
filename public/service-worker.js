const CACHE_NAME = `portfolio-cache-v1`                   //Change this to a new version before every New DEPLOY.............................
const HOME = 'https://portfolio-phi-three-63.vercel.app'

const STATIC_FILES = [
    HOME+"/",
    HOME+"/utils",
    HOME+"/certificates",
    // HOME+"/manifest.json",
    HOME+"/icon.png",
]

// Install event: Cache essential assets
self.addEventListener("install", (event) => {
    console.log("Service Worker installing...")
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_FILES)
        })
    );
    self.skipWaiting()
})

// Activate event: Delete old caches
self.addEventListener("activate", (event) => {
    console.log("Service Worker activated!")
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) return caches.delete(key)
                })
            )
        )
    )
    self.clients.claim()
})
