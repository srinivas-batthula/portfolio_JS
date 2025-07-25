import React from "react";

import styles from "./../styles/About.module.css";
import ImageCarousel from "./Certifications";
import SkillsSection from "./Skills";
import { useRouter } from "next/navigation";


export default function AboutPage() {
    const router = useRouter();

    return (
        <>
            <div className={styles.about}>
                <div className={styles.sec2}>Know Who <span style={{ color: 'rgb(231, 90, 231)', fontWeight: 'bold' }}>I'M</span></div>
                <p style={{
                    color: 'rgba(220, 220, 220, 0.751)',
                    fontSize: '1.3rem'
                }}>Passionate about modern technology and scalable architectures</p>

                <div className={styles.main}>

                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', justifyItems: 'center' }}>
                        <div className={styles.mainImg}>
                            <div className={styles.img}></div>
                        </div>
                    </div>

                    <div className={styles.sec1}>

                        <div className={styles.sec3}>
                            <div className={styles.sec4}>
                                Hello! I'm <span style={{ color: 'rgb(200, 80, 200)', fontWeight: 'bold' }}> Srinivas Batthula </span>, a passionate tech enthusiast from <span style={{ color: 'rgb(200, 80, 200)', fontWeight: 'bold' }}>Hyderabad, India</span>.
                                <br />
                                I'm currently pursuing a B.Tech degree in the field of Computer Science and Engineering at Sreenidhi Institute of Science and Technology, Hyderabad. I’m driven by a deep curiosity for technology and a desire to create meaningful digital experiences.
                            </div>
                            <div className={styles.sec4}>
                                My core skills lie in Java and JavaScript, and I’m actively honing my expertise in the MERN stack through practical, hands-on projects that push my boundaries and expand my knowledge.
                            </div>
                            <div className={styles.sec5}>
                                Beyond programming, I find joy and inspiration in a variety of activities:
                                <br />
                                <span className={styles.hobbies}>
                                    🌐 Staying up to date with the latest tech innovations
                                    <br />
                                    🚀 Building side projects that challenge and improve my skills
                                    <br />
                                    🧠 Sharpening problem-solving skills through platforms like LeetCode
                                </span>
                            </div>
                            <div className={styles.sec4} style={{ color: 'rgb(213, 114, 143)' }}>
                                <span style={{ fontWeight: 'bold' }}>" Code with purpose, learn with passion, and grow with consistency. "</span>
                                <br />
                                <span style={{ marginLeft: '50%', fontStyle: 'italic' }}> ~ Srinivas.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications section */}
                <div className={styles.main3}>
                    <div className={styles.head}>
                        Certifications  <span style={{ color: 'rgb(231, 110, 231)', fontWeight: 'bold' }}>Earned</span>
                    </div>
                    <ImageCarousel />
                </div>

                {/* Skills section */}
                <SkillsSection />

                {/* Explore More */}
                <div style={{ marginTop: '4rem' }}>
                    <div className={styles.head}>
                        Explore <span style={{ color: 'rgb(231, 110, 231)', fontWeight: 'bold' }}>More</span>
                    </div>
                    <div className="flex justify-center gap-5">
                        <button
                            onClick={() => router.push('/projects')}
                            className="group px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out active:scale-95 flex items-center gap-2"
                        >
                            <span style={{ fontSize: '1.2rem' }}> Projects </span>
                            <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" style={{ fontSize: "1.5rem" }}>
                                →
                            </span>
                        </button>
                        {/* <button
                            onClick={() => router.push('/experience')}
                            className="group px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out active:scale-95 flex items-center gap-2"
                        >
                            <span style={{ fontSize: '1.2rem' }}> Experience </span>
                            <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" style={{ fontSize: "1.5rem" }}>
                                →
                            </span>
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    )
}
