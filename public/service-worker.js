
const CACHE_NAME = `portfolio-cache-v${new Date().toISOString().slice(0, 10)}`             //Change this to a new version before every New DEPLOY.............................
const HOME = self.location.origin;      // Provide a `Deployed` URL... (self.location.origin) / "https://srinivas-batthula.vercel.app"

const STATIC_FILES = [
    `${HOME}/`,
    `${HOME}/offline.html`,
    // `${HOME}/data/certifications.json`,
    // `${HOME}/data/skills.json`,
    // `${HOME}/data/tools.json`,
];


// Install event: Cache essential assets...
self.addEventListener("install", (event) => {
    console.log("Service Worker installing...")
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_FILES)
        })
    );
    self.skipWaiting()
})

// Intercept fetch requests of same origin to cache and serve static assets & html, css, js files...
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            // Try fetching from network and cache it
            return fetch(event.request).then((networkResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    // Only cache GET requests and same-origin requests
                    if (
                        event.request.method === "GET" &&
                        event.request.url.startsWith(self.location.origin)
                    ) {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                });
            }).catch(() => {
                // Optionally return a fallback page
                if (event.request.mode === 'navigate') {
                    return caches.match(`${HOME}/offline.html`);
                }
            });
        })
    );
});

// Activate event: Delete old caches...
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

// Background-Sync for Contact-Form...
self.addEventListener("sync", (event) => {
    if (event.tag === "sync-share") {
        event.waitUntil(syncShareQueue());
    }
})

async function syncShareQueue() {
    const db = await openShareDB();
    const tx = db.transaction("contactForm", "readonly");
    const store = tx.objectStore("contactForm");
    const allShares = await new Promise((resolve, reject) => {
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
    console.log(allShares)

    for (const shareData of allShares) {
        try {
            await fetch(shareData.url, {    // Send to n8n...
                method: shareData.method,
                body: JSON.stringify(shareData.body),
                headers: shareData.headers
            })
            // Remove successfully Synced share
            const deleteTx = db.transaction("contactForm", "readwrite");
            deleteTx.objectStore("contactForm").delete(shareData.id);
            console.log('Background Sync executed...');
        } catch (err) {
            console.error("Retry later:", err);
        }
    }
}

async function openShareDB() {
    return new Promise((resolve, reject) => {
        const STORES_NAMES = ['projects', 'contactForm'];

        const request = indexedDB.open('portfolio-db', 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            for (const STORE_NAME of STORES_NAMES) {
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME, { keyPath: 'id' });
                }
            }
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
}
// async function openShareDB() {
//     const STORES_NAMES = ['projects', 'contactForm'];

//     return await openDB('portfolio-db', 1, {
//         upgrade(db) {
//             for (const STORE_NAME of STORES_NAMES) {
//                 if (!db.objectStoreNames.contains(STORE_NAME)) {
//                     db.createObjectStore(STORE_NAME, { keyPath: 'id' });
//                 }
//             }
//         },
//     });
// }
