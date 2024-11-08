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
                    Copyright © 2024 BSP
                </div>
                <div className={styles.footerChild3}>
                    <a href="https://www.linkedin.com/in/srinivas-batthula/" target="_blank" style={{fontSize:'1.5rem', color:'skyblue', marginRight:'1rem'}}>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/srinivas-batthula/" target="_blank" style={{fontSize:'1.5rem', color:'white', marginRight:'1rem'}}>
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/srinivas_abhi8/" target="_blank" style={{fontSize:'1.5rem', color:'red', marginRight:'1rem'}}>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </>
    )
}