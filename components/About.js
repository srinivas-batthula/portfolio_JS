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
                    <div className={styles.head}>
                        Professional  <span style={{ color: 'rgb(184, 41, 184)', fontWeight: 'bold' }}>Skillset</span>
                    </div>
                    <div className={styles.flex1}>

                        <div className={styles.flex2}><span className={styles.i}><i className="fa-brands fa-js"></i></span></div>

                        <div className={styles.flex2}><span className={styles.i}><i className="fa-brands fa-python"></i></span></div>

                        <div className={styles.flex2}><span className={styles.i}><i className="fa-solid fa-c"></i></span></div>

                        <div className={styles.flex2}><span className={styles.i}><i className="fa-brands fa-node"></i></span></div>

                        <div className={styles.flex2}><span className={styles.i}><i className="fa-brands fa-react"></i></span></div>

                        <div className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-mongodb-plain-wordmark"></i></span>
                        </div>

                        <div className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-nextjs-original-wordmark"></i></span>
                        </div>

                        <div className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-express-original"></i></span>
                        </div>

                        <div className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-bootstrap-plain"></i>
                        </span>
                        </div>

                        <div className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-reactbootstrap-original"></i>
                        </span>
                        </div>

                        <div className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-tailwindcss-original"></i>
                        </span>
                        </div>
                        
                        <div className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-git-plain"></i></span>
                        </div>

                    </div>
                </div>
                <div className={styles.main2}>
                    <div className={styles.head}>
                        <span style={{ color: 'rgb(184, 41, 184)', fontWeight: 'bold' }}>Tools</span> I use
                    </div>
                    <div className={styles.flex3}>
                        <div className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-vscode-plain"></i></span>
                        </div>
                        <div className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-postman-plain"></i></span>
                        </div>
                        <div className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-github-original"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
