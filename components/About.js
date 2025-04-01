import React from "react";

import styles from "./../styles/About.module.css";
import ImageCarousel from "./Certifications";


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

                <div className={styles.main3}>
                    <div className={styles.head}>
                        Certifications  <span style={{ color: 'rgb(184, 41, 184)', fontWeight: 'bold' }}>Earned</span>
                    </div>
                    <ImageCarousel />
                </div>

                <div className={styles.main2}>
                    <div className={styles.head}>
                        Professional  <span style={{ color: 'rgb(184, 41, 184)', fontWeight: 'bold' }}>Skillset</span>
                    </div>
                    <div className={styles.flex1}>

                        <div title="java" className={styles.flex2}><span className={styles.i}><i className="devicon-java-plain"></i></span></div>

                        <div title="javascript" className={styles.flex2}><span className={styles.i}><i className="devicon-javascript-plain"></i></span></div>

                        <div title="python" className={styles.flex2}><span className={styles.i}><i className="devicon-python-plain-wordmark"></i></span></div>

                        <div title="mongodb" className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-mongodb-plain-wordmark"></i></span>
                        </div>

                        <div title="mongoose/ODM" className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-mongoose-original-wordmark"></i></span>
                        </div>

                        <div title="nodejs" className={styles.flex2}><span className={styles.i}><i className="fa-brands fa-node"></i></span></div>

                        <div title="expressjs" className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-express-original"></i></span>
                        </div>

                        <div title="json" className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-json-plain"></i></span>
                        </div>

                        <div title="reactjs" className={styles.flex2}><span className={styles.i}><i className="fa-brands fa-react"></i></span></div>

                        <div title="redux/toolkit" className={styles.flex2}><span className={styles.i}><i className="devicon-redux-original"></i></span></div>

                        <div title="nextjs" className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-nextjs-original-wordmark"></i></span>
                        </div>
                        
                        <div title="git/version-control" className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-git-plain"></i></span>
                        </div>

                        <div title="bootstrap" className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-bootstrap-plain"></i>
                        </span>
                        </div>

                        <div title="reactbootstrap" className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-reactbootstrap-original"></i>
                        </span>
                        </div>

                        <div title="tailwindcss" className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-tailwindcss-original"></i>
                        </span>
                        </div>

                        <div title="html5" className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-html5-plain-wordmark"></i></span>
                        </div>

                        <div title="css3" className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-css3-plain-wordmark"></i></span>
                        </div>

                    </div>
                </div>
                <div className={styles.main2}>
                    <div className={styles.head}>
                        <span style={{ color: 'rgb(184, 41, 184)', fontWeight: 'bold' }}>Tools</span> I use
                    </div>
                    <div className={styles.flex3}>
                        <div title="vscode" className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-vscode-plain"></i></span>
                        </div>
                        <div title="postman" className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-postman-plain"></i></span>
                        </div>
                        <div title="github" className={styles.flex2}><span className={styles.i}>
                            <i className="devicon-github-original"></i></span>
                        </div>
                        <div title="vercel" className={styles.flex2}><span className={styles.i}>
                            <i class="devicon-vercel-original"></i></span>
                        </div>
                        <div title="netlify" className={styles.flex2}><span className={styles.i}>
                            <i class="devicon-netlify-plain"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
