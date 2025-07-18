"use client";

import { motion } from 'framer-motion';
import styles from '@/styles/Fun.module.css';
import { useUserDetailsStore } from "@/store/useUserDetailsStore";


export default function UserGreeting() {
    const details = useUserDetailsStore((s) => s.details);


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
