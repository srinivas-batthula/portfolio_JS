import React from "react";

import styles from './../styles/Home.module.css'

export default function Footer() {
    return(
        <>
            <div className={styles.footer}>
                <div className={styles.footerChild1}>
                    Designed and Developed by <span style={{color:'rgb(251, 53, 251)', fontWeight:'bold', fontStyle:'italic'}}>Srinivas Batthula</span>
                </div>
                <div className={styles.footerChild2}>
                    Copyright © { new Date().getFullYear() } BSP
                </div>
                <div className={styles.footerChild3}>
                    <a href="https://www.linkedin.com/in/srinivas-batthula/" rel="me" title="srinivas batthula linkedin socials" target="_blank" style={{fontSize:'1.5rem', color:'skyblue', marginRight:'1rem'}}>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/srinivas-batthula/" rel="me" title="srinivas batthula github socials" target="_blank" style={{fontSize:'1.5rem', color:'white', marginRight:'1rem'}}>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </>
    )
}