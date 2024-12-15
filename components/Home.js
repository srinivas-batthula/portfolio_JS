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
                        <a href="https://leetcode.com/u/WRBRSO7OH6/" target="_blank" style={{ fontSize: '2rem', color: 'red', marginRight: '1rem', borderRadius: '30%' }} className={styles.link3}>
                        <img width='2rem' height='2rem' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFAUlEQVR4nNWYa2wUVRTHL0Q7O7M7u53d7W4XuvduS+O6pUgp9IHFAI00BSlliQLWBxECFmsTAiakEkUDJE3URKyIGgXaOy2xUGa22y/6RU2MgRg/+EDiEyXsHSqoWEPsg+6YIVZh3bm7trPt9J+cj/fc3/8+5s45AEySHlxqc9cs5L/wCJZ4vo8dfqja8RqYLqoutnqLEHuVYbLUsbBYstTN99obwbSAD3C/3Qw/FivLbGeAmbX4LqsnpAOvRbjKHgVm1ZISW05RgPtVD97jtFxvWOIpAGbU0jts7hDSh3dlW0bDlbYwMKOK8oAzBNkrNPi1VbZ1YFrCOyzxDcvsG4BZ4YMU+Gyeid9fxT8KzKiyO4ErhDhdeAfPqPs3ufapKpgBzKZ5EAi0Y2PjGPXYTq+qiEglIvpWEeEWdS+YCUwEf1kPnmOz1NebPTfgbwkMP1A6CjxTCl9eCOzF+Vw/Df7wk0ng/w6C0fex9gI4JfBBF+DnBrhL44W/aSd+JGIAmQ++SYOHfxIRDqQyQTD85nKXf9akwBcIwBGCbD/ta9Oy3nWq/7h/ztiYWKfPHRPhViLCfspOnOs/inInA1535QU7ozaHhaf0xl88PseviPBrym6czdjFzskBtuKAlVAeKbW53rU7VZ6fMfTdANW/2J9ffivIGw+fz8Vo8DvXOvekm09bZYLhZ5SdeN5Q+LkBOvyudc5n/2/ei+2zXIqIPtUxcNIQeK8XWEOIJbQz3/KA8Nx48//UCQWC4ZlEAzGMdhjBP6OkkPuSCr/RtX+ik1zBhXaCUe8/d0CEXeobC2+fMP3qSr6VBv9Mg7sVGKhYewHULrhR+bKg1zKod+b3PpzzMjCz1lTwB5LB81ZG3feIyeE1LQpy3yUzsLVWeA9MB7mzLSOJ8AEfO9q9W3CkGivLclFUlj7qjcjD0YisGhaydC0qS3JPTw/9pbbZgDvZ6q+ptP+QCl5V1RlRWTpnKHjk1uiNSCeoEAzDFCQz0LDccTqVAUmS/JmEj94wIF+lQrAsm5fMQLjKfi6Vge7ubrZXlgYza0I6m4rjNruNiScaKA5wQ+kU5NGItKtXluIZWX1ZGoxETq1OxQCC/uQ17o6wkNbL2ydJJZGItKUvIm0zKqKRyKa+vpPptSFrF/FdyQwgr2X00HbvcmB2LV6Qjfgkx0iLuQFu5MgO9z3A7FpVxr+r9y8U9LMjrzT6zG3i7iDgC/PYAT0T2k60NXkWGzGX0oEe02oDIsLTCvavB0YpvDx7vtfJjFBMDL/6hLNiInMQER5IKCnjMRyoMcxEXaVQleuim2hrci0aT24FoxeSdyiQCIzUylJrdY5guU41sc1dmm4+7T0hGB3Ub7GgN4HRqitPaWLoxc3uBSnh94KZCoaHKQX9NdKOQiATWlFqrXZn65uYl88NHWzUN6HBExG+TWluDZJOtApkUrXlXA1tJ0rmcEOftPlXJI67cCxv9s21b1L4DlQLJkN1lfZamokTT/u0vuhXWoGuiPCYguGHCoZDFPghBcP7JgU+wcRoMgPdLbmpu9L/diGGL4mBejAVqq/gVyWayPex6vkjMD14jK4rnWgjmEo9vlKoqghxA04Hoy6bb1M/fml2equP0S+XOv57V6ZE548iC8GolWD0R+ojg0aJiN5ROmA+MJtinT436UTbFQx7tDY6EeHv2tdFwfACEeH7BKM9BMMioyf+C4kZtOYAF/RbAAAAAElFTkSuQmCC" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo" />
                        </a>
                        <a href="https://www.instagram.com/srinivas_abhi8/" target="_blank" style={{ fontSize: '2rem', color: 'red', marginRight: '1rem', borderRadius: '30%' }} className={styles.link3}>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://x.com/Abhi07082005" target="_blank" style={{ fontSize: '2rem', color: 'red', marginRight: '1rem', borderRadius: '30%' }} className={styles.link3}>
                            <i className="fa-brands fa-square-x-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
