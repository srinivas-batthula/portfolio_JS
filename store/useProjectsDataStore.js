// store/useProjectsDetailsStore
"use client";

import { create } from "zustand";
import { saveToIndexedDB, getFromIndexedDB } from "@/utils/indexedDB";


export const useProjectsDataStore = create((set) => ({
    projects: null,

    // Fetch Projects details...
    fetchProjects: async () => {
        
        // If offline, load from IndexedDB...
        if (typeof navigator !== "undefined" && !navigator.onLine) {
            const cached = await getFromIndexedDB('projects');
            if (cached) {
                set({ projects: cached.data });
            } else {
                set({ projects: null });
            }
            return;
        }

        // Online: fetch from live github...
        try {
            let r = await fetch('https://api.github.com/users/srinivas-batthula/repos', {       // Fetch all repo's of `srinivas-batthula`...
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            r = await r.json()

            r.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));  // Sort repositories by creation date (descending / Newest-1st)...

            const promises = r.map(async (item) => {    // Fetch `metadata.json` files from all the repo's...
                try {
                    let res = await fetch(`https://raw.githubusercontent.com/srinivas-batthula/${item.name}/main/metadata.json`, {
                        method: 'GET',
                    })
                    if (res.status === 200) {
                        res = await res.json()
                        console.log(item.name + '  -Success!')
                        return res
                    }
                } catch (error) {
                    console.log(`${item.name} -NOT contains 'metadata.json' file!`);
                }
            })

            const Data = await Promise.all(promises)    // Wait for all fetch requests to finish...
            setTimeout(() => {
                const temp = Data.filter(item => item !== undefined);       // Filter out any undefined results (in case of fetch errors)...
                set({ projects: temp });
                saveToIndexedDB(temp, 'projects');       // Save to IndexedDB...
            }, 1000)

        } catch (error) {
            const cached = await getFromIndexedDB('projects');
            if (cached) {
                set({ projects: cached.data });
            }
            console.log('Error while fetching `projects`!', error);
        }
    },

}));