import React from "react";

import styles from "./../styles/Projects.module.css";

export default function ProjectsPage() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.head}>
                    My Recent <span style={{ color: 'rgb(251, 53, 251)', fontWeight: 'bold' }}>Works</span>
                    <div style={{ margin: '0.2rem', fontSize: '1.1rem', fontWeight: '400' }}>Here are a few projects I've worked on recently.</div>
                </div>
                <div className={styles.main2}>


                    <div className={styles.card}>
                        <div className={styles.img}>
                            <img src='/utils/atm_project.png' alt="project image" style={{ width: '18rem', height: '15.5rem'}} />
                        </div>
                        <div className={styles.title}>
                            ATM System
                        </div>
                        <div className={styles.content}>
                            Welcome to the Project 'ATM System' - A Robust Banking Experience! This Python application simulates an ATM interface, allowing users to perform essential banking operations such as balance inquiries, deposits, transaction history with permanent data storage in JSON files and account management—all within a command-line environment.
                        </div>
                        <div className={styles.links}>
                            <button className={styles.btn} style={{ marginRight: '1rem' }}><a href="https://github.com/srinivas-batthula/ATM_System" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'center' }}><i className="fa-brands fa-github" style={{paddingTop:'0.2rem', marginRight:'0.3rem'}}></i><span>GitHub</span></a></button>
                                                    
                                                    {/* Un-Comment the below btn for adding " DEMO " link to project */}
                            {/* <button className={styles.btn} style={{ marginLeft: '1rem' }}><a href="" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'center' }}><i class="fa-solid fa-arrow-up-right-from-square" style={{paddingTop:'0.2rem', marginRight:'0.3rem'}}></i><span>  Demo  </span></a></button> */}
                        </div>
                    </div>


                </div>

                                                    {/* Temporary text (Remove This...) */}
                <div className={styles.temp}>More Projects Coming Soon...</div>

            </div>
        </>
    )
}