import React from "react";

import styles from "./../styles/About.module.css";

export default function AboutPage() {
    return (
        <>
            <div className={styles.about}>
                <div className={styles.sec2}>Know Who <span style={{ color: 'rgb(251, 53, 251)', fontWeight: 'bold' }}>I'M</span></div>

                <div className={styles.main}>

                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', justifyItems: 'center' }}>
                        <div className={styles.mainImg}>
                            <div className={styles.img}></div>
                        </div>
                    </div>

                    <div className={styles.sec1}>

                        <div className={styles.sec3}>
                            <div className={styles.sec4}>
                                Hi Everyone, I am <span style={{ color: 'rgb(251, 53, 251)', fontWeight: 'bold' }}> Srinivas Batthula </span> from <span style={{ color: 'rgb(251, 53, 251)', fontWeight: 'bold' }}>Karimnagar, India</span>.
                                <br />
                                I am currently pursuing my B.Tech degree in CSE at Sreenidhi Institute of Science and Technology, Hyderabad  with a passion for building impactful applications.
                            </div>
                            <div className={styles.sec4}>
                                I am skilled in Python & JavaScript and am currently exploring the MERN stack by working on hands-on projects.
                            </div>
                            <div className={styles.sec5}>
                                Apart from coding, here are some other activities that I enjoy:
                                <br />
                                <span className={styles.hobbies}>
                                    🌐 Exploring new tech trends
                                    <br />
                                    🌍 Travelling
                                    <br />
                                    🚀 Building side projects to sharpen my skills
                                </span>
                            </div>
                            <div className={styles.sec4} style={{ color: 'rgb(113, 54, 113)' }}>
                                "Code to create, learn, and grow every day!"
                                <br />
                                <span style={{ marginLeft: '50%' }}>— Srinivas</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.main2}>
                    <div style={{ fontSize: '2.3rem' }}>
                        Professional  <span style={{ color: 'rgb(184, 41, 184)', fontWeight: 'bold' }}>Skillset</span>
                    </div>
                    <div className={styles.flex1}>

                        <div className={styles.flex2}><i className="fa-brands fa-js" style={{ fontSize: '5rem' }}></i></div>
                        <div className={styles.flex2}><i className="fa-brands fa-python" style={{ fontSize: '5rem' }}></i></div>
                        <div className={styles.flex2}><i className="fa-solid fa-c" style={{ fontSize: '5rem' }}></i></div>
                        <div className={styles.flex2}><i className="fa-brands fa-node" style={{ fontSize: '5rem' }}></i></div>
                        <div className={styles.flex2}><i className="fa-brands fa-react" style={{ fontSize: '5rem' }}></i></div>
                        <div className={styles.flex2}>
                            <i className="devicon-mongodb-plain-wordmark" style={{ fontSize: '5rem' }}></i>
                        </div>
                        <div className={styles.flex2}>
                            <i className="devicon-nextjs-original-wordmark" style={{ fontSize: '5rem' }}></i>
                        </div>
                        <div className={styles.flex2}>
                            <i className="devicon-git-plain" style={{ fontSize: '5rem' }}></i>
                        </div>
                        <div className={styles.flex2}>
                            <i className="devicon-express-original" style={{ fontSize: '5rem' }}></i>
                        </div>

                    </div>
                </div>
                <div className={styles.main2}>
                    <div style={{ fontSize: '2.3rem' }}>
                        <span style={{ color: 'rgb(184, 41, 184)', fontWeight: 'bold' }}>Tools</span> I use
                    </div>
                    <div className={styles.flex3}>
                        <div className={styles.flex2}>
                            <i className="devicon-vscode-plain" style={{ fontSize: '5rem' }}></i>
                        </div>
                        <div className={styles.flex2}>
                            <i className="devicon-postman-plain" style={{ fontSize: '5rem' }}></i>
                        </div>
                        <div className={styles.flex2}>
                            <i className="devicon-github-original" style={{ fontSize: '5rem' }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
