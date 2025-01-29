import React from 'react'

import NavbarResponsive from './Navbar'
import Footer from './Footer'
import ParticlesBackground from './Background'

import styles from './../styles/Home.module.css'

const Layout = ({ children })=>{
    return(
        <div className={styles.layoutDiv}>
            <div style={{width: '100%', height:'100vh', position:'fixed', zIndex:'-9999'}}>
                <ParticlesBackground />
            </div>
            <NavbarResponsive />
            <div className={styles.layoutDiv2}>
                <main>{ children }</main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;