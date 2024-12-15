import React, { useState, useEffect } from "react";
import styles from "./../styles/Home.module.css";

const TypingEffect = () => {
    const texts = [
        "Software Developer",
        "Problem Solver",
        "Full-Stack Developer"
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
            <div className={styles.typing_text} key={currentTextIndex}>{texts[currentTextIndex]}</div>
        </div>
    );
};

export default function Home() {
    const sendRequest = async() => {
        try {
            const response = await fetch('https://portfolio-backend-ynyr.onrender.com/test/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                return;
            } else {
                return;
            }
        } catch (error) {
            return;
        }
    };
    // Effect to send the request when the page loads
    useEffect(() => {
        sendRequest();
    }, []); // Empty dependency array ensures this runs only once when the component mounts


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
                        <div className={styles.sec}>
                            I'M <span className={styles.secSpan}>SRINIVAS BATTHULA</span>
                        </div>
                        <div className={styles.third}>
                            <TypingEffect />
                        </div>
                    </div>
                </div>
                <div className={styles.grid_item} id={styles.g2}>
                    <div className={styles.subDiv}></div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', justifyItems: 'center', alignItems: 'center' }}>
                <div className={styles.div1}>
                    <div>
                        <div className={styles.div2}>LET ME <span style={{ color: 'rgb(251, 53, 251)' }}>INTRODUCE</span> MYSELF</div>
                        <div className={styles.div3}>
                            <div>
                                Hey there! 👋 I’m a passionate developer who’s fallen in love with programming and never looked back. 💻 From solving problems to building products, I’m on a constant journey of learning and growth — and I can proudly say, I’ve learned something along the way! 😅
                                <br /><br />
                                I’m fluent in the classics like <span style={{ color: 'rgb(251, 53, 251)', fontStyle: 'oblique', fontWeight: 'bold' }}>Python</span> and <span style={{ color: 'rgb(251, 53, 251)', fontStyle: 'oblique', fontWeight: 'bold' }}>JavaScript</span>, and my interests revolve around creating innovative <span style={{ color: 'rgb(251, 53, 251)', fontStyle: 'oblique', fontWeight: 'bold' }}>Web applications and scalable products</span>. I love diving into the world of <span style={{ color: 'rgb(251, 53, 251)', fontStyle: 'oblique', fontWeight: 'bold' }}>Full Stack Development</span>, where I get to solve complex problems and build seamless applications that users will love. 🚀
                                <br /><br />
                                My <span style={{ color: 'rgb(251, 53, 251)', fontStyle: 'oblique', fontWeight: 'bold' }}>MERN-Stack</span> expertise allows me to bring ideas to life with powerful tools like <span style={{ color: 'rgb(251, 53, 251)', fontStyle: 'oblique', fontWeight: 'bold' }}>React.js and Next.js</span>, making modern web apps that are not just functional but also fast and user-friendly.
                                <br /><br />
                                If you're looking for someone with a passion for building dynamic, scalable web solutions and modern applications, I'm your guy! Let's create something amazing together. 🌟
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.d1}>
                    <div className={styles.d2}>
                        FIND ME ON
                    </div>
                    <div className={styles.d3}>
                        Feel free to <span style={{ color: 'rgb(251, 53, 251)', fontWeight: 'bold' }}>connect</span> with me
                    </div>
                    <div className={styles.d4}>
                        <a href="https://www.linkedin.com/in/srinivas-batthula/" target="_blank" style={{ fontSize: '2rem', color: 'skyblue', marginRight: '1rem', borderRadius: '30%' }} className={styles.link1}>
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/srinivas-batthula/" target="_blank" style={{ fontSize: '2rem', color: 'white', marginRight: '1rem', borderRadius: '30%' }} className={styles.link2}>
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://leetcode.com/u/WRBRSO7OH6/" target="_blank" style={{ fontSize: '2rem', color: 'red', marginRight: '1rem', borderRadius: '30%' }} className={styles.link4}>
                            <img width='3rem' height='3rem' src="../public/leetcode.png" />
                        </a>
                        <a href="https://www.instagram.com/srinivas_abhi8/" target="_blank" style={{ fontSize: '2rem', color: 'red', marginRight: '1rem', borderRadius: '30%' }} className={styles.link3}>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://x.com/Abhi07082005" target="_blank" style={{ fontSize: '2rem', color: 'white', marginRight: '1rem', borderRadius: '30%' }} className={styles.link5}>
                            <i className="fa-brands fa-square-x-twitter" style={{color:'white', fontSize:'2rem'}}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
