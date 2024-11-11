import React from "react";

import styles from "./../styles/Projects.module.css";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
                            <img src='./../public/utils/atm_project.png' alt="project image" />
                        </div>
                        <div className={styles.title}>
                            ATM System
                        </div>
                        <div className={styles.content}>
                            Welcome to the Project 'ATM System' - A Robust Banking Experience! This Python application simulates an ATM interface, allowing users to perform essential banking operations such as balance inquiries, deposits, transaction history with permanent data storage in JSON files and account management—all within a command-line environment.
                        </div>
                        <div className={styles.links}>
                                                {/* Use this DropDown to display 2-github links for Frontend & Backend */}
                            {/* <DropdownButton id="dropdown-item-button" title="GitHub" style={{color:'white', backgroundColor:'blue'}}>
                                <Dropdown.Item as="button"><a href="" target="_blank" style={{ color: 'black', textDecoration: 'none', fontSize: '1rem' }}>Frontend Code</a></Dropdown.Item>
                                <Dropdown.Item as="button"><a href="" target="_blank" style={{ color: 'black', textDecoration: 'none', fontSize: '1rem' }}>Backend Code</a></Dropdown.Item>
                            </DropdownButton> */}

                            <button className={styles.btn2} style={{ marginRight: '1rem' }}><a href="https://github.com/srinivas-batthula/ATM_System" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', padding:'0.3rem' }}>GitHub</a></button>

                                                {/* Un-Comment the below btn for adding " DEMO " link to project */}
                            {/* <button className={styles.btn2} style={{ marginLeft: '1rem' }}><a href="" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}><i class="fa-solid fa-arrow-up-right-from-square" style={{ paddingTop: '0.2rem', marginRight: '0.3rem' }}></i><span>  Demo  </span></a></button> */}
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.img}>
                            <img src='./../public/utils/portfolio_project.png' alt="project image" />
                        </div>
                        <div className={styles.title}>
                            Personal Portfolio
                        </div>
                        <div className={styles.content}>
                            'Personal Portfolio' is a modern & responsive website developed using React & Next.js, designed to showcase my skills, projects... in the tech world. The portfolio features an interactive user experience with smooth transitions and a mobile-friendly design. Feel free to explore and get a glimpse of my journey as a developer, and don't hesitate to reach out if you’d like to connect!
                        </div>
                        <div className={styles.links}>
                                                {/* Use this DropDown to display 2-github links for Frontend & Backend */}
                            <DropdownButton id="dropdown-item-button" title="GitHub" style={{color:'white', backgroundColor:'blue'}}>
                                <Dropdown.Item as="button"><a href="https://github.com/srinivas-batthula/portfolio" target="_blank" style={{ color: 'black', textDecoration: 'none', fontSize: '1rem' }}>Frontend Code</a></Dropdown.Item>
                                <Dropdown.Item as="button"><a href="https://github.com/srinivas-batthula/portfolio_backend" target="_blank" style={{ color: 'black', textDecoration: 'none', fontSize: '1rem' }}>Backend Code</a></Dropdown.Item>
                            </DropdownButton>

                            {/* <button className={styles.btn2} style={{ marginRight: '1rem' }}><a href="https://github.com/srinivas-batthula/ATM_System" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', padding:'0.3rem' }}>GitHub</a></button> */}

                                                {/* Un-Comment the below btn for adding " DEMO " link to project */}
                            <button className={styles.btn2} style={{ marginLeft: '1rem' }}><a href="" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}><i className="fa-solid fa-arrow-up-right-from-square" style={{ paddingTop: '0.2rem', marginRight: '0.3rem' }}></i><span>  Demo  </span></a></button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.img}>
                            <img src='./../public/utils/coming_soon.png' alt="project image" style={{opacity:'0.75', width:'15rem', height:'15rem'}}/>
                        </div>
                        <div className={styles.title}>
                            Coming Soon...
                        </div>
                        
                    </div>
                    

                </div>
            </div>
        </>
    )
}
