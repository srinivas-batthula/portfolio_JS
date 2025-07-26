'use client'

import React, { useState, useEffect } from "react";
import styles from "./../styles/Home.module.css";
import Socials from "./Socials";


const TypingEffect = () => {
    const texts = [
        "Software Developer",
        "Problem Solver",
        "MERN Stack Developer",
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => {
                return (prevIndex + 1) % texts.length;
            });
        }, 6000); // Change text every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [texts.length]);

    return (
        <div className={styles.typing_container}>
            <div className={styles.typing_text} key={currentTextIndex}>
                {texts[currentTextIndex]}
            </div>
        </div>
    );
};

export default function Home() {

    return (
        <div className={styles.main}>
            <div className={styles.grid_container}>
                <div className={styles.grid_item} id={styles.g1}>
                    <div className={styles.secMain}>
                        <div className={styles.mainContent}>
                            <div className={styles.container}>
                                Hi There!
                                <span className={styles.hand}>👋🏻</span>
                            </div>
                        </div>
                        <h1 className={styles.sec}>
                            I'M <span className={styles.secSpan}>SRINIVAS BATTHULA</span>
                        </h1>
                        <div className={styles.third} style={{ fontWeight: "bold" }}>
                            <TypingEffect />
                        </div>
                    </div>
                </div>
                <div className={styles.grid_item} id={styles.g2}>
                    <div className={styles.subDiv}></div>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    justifyItems: "center",
                    alignItems: "center",
                }}
            >
                <div className={styles.div1}>
                    <div style={{ backgroundColor: "transparent" }}>
                        <div className={styles.div2}>
                            LET ME{" "}
                            <span style={{ color: "rgb(231, 110, 231)" }}>INTRODUCE</span>{" "}
                            MYSELF
                        </div>
                        <div className={styles.div3}>
                            <p>
                                Hello! I'm <span style={{ color: 'rgb(231, 100, 231)', fontWeight: 'bold' }}> Srinivas Batthula </span>,
                                a Motivated and detail-oriented 𝐅𝐮𝐥𝐥 𝐒𝐭𝐚𝐜𝐤 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 with hands-on experience in developing and deploying scalable web applications.
                                <br />
                                <br />
                                I specialize in building robust solutions using 𝐌𝐄𝐑𝐍 𝐬𝐭𝐚𝐜𝐤 and 𝐍𝐞𝐱𝐭𝐉𝐬. Passionate about crafting high-performance apps, I implement 𝐏𝐫𝐨𝐠𝐫𝐞𝐬𝐬𝐢𝐯𝐞 𝐖𝐞𝐛 𝐀𝐩𝐩 (𝐏𝐖𝐀) features, integrate modern APIs, and optimize backend workflows for seamless user experiences.
                                <br />
                                <br />
                                I'm committed to 𝐜𝐨𝐧𝐭𝐢𝐧𝐮𝐨𝐮𝐬 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠 and love 𝐜𝐨𝐧𝐭𝐫𝐢𝐛𝐮𝐭𝐢𝐧𝐠 to dynamic, tech-driven teams building the future.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.d1}>
                    <div className={styles.d2}>FIND ME ON</div>
                    <div className={styles.d3}>
                        Feel free to{" "}
                        <span style={{ color: "rgb(231, 90, 231)", fontWeight: "bold" }}>
                            connect
                        </span>{" "}
                        with me
                    </div>

                    <Socials />
                </div>
            </div>
        </div>
    );
}
