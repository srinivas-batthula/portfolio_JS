"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Fun.module.css'


export default function UserGreeting() {
    const [details, setDetails] = useState({
        greeting: '',
        browser: '',
        os: '',
        language: '',
        screenSize: '',
        city: '',
        country: '',
    });

    useEffect(() => {
        const userAgent = navigator.userAgent;
        let browser = 'Unknown';
        let os = 'Unknown';

        if (userAgent.includes('Chrome')) browser = 'Chrome';
        else if (userAgent.includes('Firefox')) browser = 'Firefox';
        else if (userAgent.includes('Safari')) browser = 'Safari';
        else if (userAgent.includes('Edge')) browser = 'Edge';

        if (userAgent.includes('Win')) os = 'Windows';
        else if (userAgent.includes('Mac')) os = 'MacOS';
        else if (userAgent.includes('Linux')) os = 'Linux';
        else if (/Android/.test(userAgent)) os = 'Android';
        else if (/iPhone|iPad/.test(userAgent)) os = 'iOS';

        const hour = new Date().getHours();
        const greeting =
            hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

        const screenSize = `${ window.innerWidth }x${ window.innerHeight }`;
        const language = navigator.language;

        fetch('/api/userDetails')
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
            });
    }, []);


    return (
        <div className={styles.main}>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="max-w-xl mx-auto bg-gradient-to-r from-purple-700 to-sky-600 text-white p-6 rounded-2xl shadow-2xl mt-6"
            >
                <motion.p
                    className="text-xl sm:text-2xl font-bold mb-3"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {details.greeting} dev! You're visiting from {details.city}, {details.country}.
                </motion.p>
                <motion.p
                    className="text-sm sm:text-base text-white/90"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    Browser: {details.browser} | OS: {details.os} | Language: {details.language} | Screen: {details.screenSize}
                </motion.p>
            </motion.div>
        </div>
    );
};
