import { openDB } from 'idb';

const DB_NAME = 'portfolio-db';
const STORES_NAMES = ['projects', 'contactForm'];

// Ensure IndexedDB runs only in the browser
const isBrowser = typeof window !== 'undefined'

export const dbPromise = isBrowser
    ? openDB(DB_NAME, 1, {
        upgrade(db) {
            for (const STORE_NAME of STORES_NAMES) {
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME, { keyPath: 'id' });
                }
            }
        },
    })
    : Promise.resolve(null);


// SAVE ALL to a store...
export const saveToIndexedDB = async (data, stores = 'contactForm') => {
    const db = await dbPromise;
    if (!db) return { success: false, msg: `IndexedDB not available!` };
    if (!db.objectStoreNames.contains(stores)) {         // Ensure store exists
        return { success: false, msg: `${stores} -store not Found!` }
    }

    const tx = db.transaction(stores, 'readwrite')
    const store = tx.objectStore(stores)

    await store.clear()     // Clear old data before saving new

    if (stores === 'projects') {
        let i = 0;
        for (const project of data) {
            await store.put({ ...project, id: i });
            i += 1;
        }
    }
    else {
        await store.put({ ...data, id: 1 });
    }

    await tx.done
    return { success: true, msg: `${stores} cached locally` };
};


// GET ALL items from a store...
export const getFromIndexedDB = async (stores = 'contactForm') => {
    const db = await dbPromise;
    if (!db) return { success: false, msg: `IndexedDB not available!`, data: [] };
    if (!db.objectStoreNames.contains(stores)) {         // Ensure store exists
        return { success: false, msg: `${stores} -store not Found!`, data: [] };
    }

    const all = await db.getAll(stores);
    return { success: true, data: all };
};

// Clear ALL items in a store...
export const clearInIndexedDB = async (stores = 'contactForm', id) => {
    const db = await dbPromise;
    if (!db) return;

    await db.delete(stores, id);
    return { success: true, msg: `${stores} -Cleared All!` };
};
