import React from 'react'

import NavbarResponsive from './Navbar'
import Footer from './Footer'
import ParticlesBackground from './Background'

import styles from './../styles/Home.module.css'

const Layout = ({ children })=>{
    return(
        <div className={styles.layoutDiv}>
            <ParticlesBackground />

            <div style={{position: "relative"}}>
                <NavbarResponsive />

                <div className={styles.layoutDiv2}>
                    <main>{ children }</main>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Layout;