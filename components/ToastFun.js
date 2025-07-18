"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function FunToast() {
    const [details, setDetails] = useState({
        greeting: "",
        browser: "",
        os: "",
        language: "",
        screenSize: "",
        city: "",
        country: "",
    });

    useEffect(() => {
        const notify = () =>
            toast.custom((t) => (
                <div className="fixed top-3 right-5 z-50">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="max-w-xl mx-auto bg-gradient-to-r from-purple-700 to-sky-600 text-white p-4 rounded-2xl shadow-2xl mt-6 relative"
                    >
                        <motion.p
                            className="text-lg sm:text-lg font-bold mb-3"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            {details.greeting} dev! You're visiting from {details.city}, {details.country}.
                        </motion.p>

                        <motion.p
                            className="text-sm sm:text-sm text-white/90"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            Browser: {details.browser} | OS: {details.os} | Language: {details.language} | Screen: {details.screenSize}
                        </motion.p>

                        {/* Close Button */}
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="absolute top-1 right-4 text-3xl font-bold text-red-500 hover:text-red-800 transition"
                        >
                            &times;
                        </button>
                    </motion.div>
                </div>
            ), { duration: 40000 });

            
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

        fetch("/api/userDetails")
            .then((res) => res.json())
            .then((data) => {
                setDetails({
                    greeting,
                    browser,
                    os,
                    language,
                    screenSize,
                    city: data.city,
                    country: data.country,
                });
                console.log('User Details :-  ', details);
                notify();
            })
            .catch((err) => {
                console.error(err);
            });

        // setTimeout(notify, 2000);
    }, []);

    return null;
}
