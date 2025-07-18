// store/useUserDetailsStore
"use client";

import { create } from "zustand";


export const useUserDetailsStore = create((set) => ({
    details: null,

    // Fetch User-Greeting details...
    fetchDetails: async () => {
        const userAgent = navigator.userAgent;
        let browser = "Unknown";
        let os = "Unknown";

        if (userAgent.includes("Chrome")) browser = "Chrome";
        else if (userAgent.includes("Firefox")) browser = "Firefox";
        else if (userAgent.includes("Safari")) browser = "Safari";
        else if (userAgent.includes("Edge")) browser = "Edge";

        if (userAgent.includes("Win")) os = "Windows";
        else if (userAgent.includes("Mac")) os = "MacOS";
        else if (userAgent.includes("Linux")) os = "Linux";
        else if (/Android/.test(userAgent)) os = "Android";
        else if (/iPhone|iPad/.test(userAgent)) os = "iOS";

        const hour = new Date().getHours();
        const greeting =
            hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

        const screenSize = `${window.innerWidth}x${window.innerHeight}`;
        const language = navigator.language;

        try {
            const res = await fetch("/api/userDetails");
            const data = await res.json();
            if (data.city && data.country) {
                let temp = {
                    greeting,
                    browser,
                    os,
                    language,
                    screenSize,
                    city: data.city,
                    country: data.country,
                }

                set({ details: temp });
                return true;
            } else {
                set({ details: null });
                return false;
            }
        } catch (err) {
            set({ details: null });
            return false;
        }
    },

}));