import React from 'react'

import NavbarResponsive from './Navbar'
import Footer from './Footer'

import styles from './../styles/Home.module.css'

const Layout = ({ children })=>{
    return(
        <div className={styles.layoutDiv}>
            <NavbarResponsive />
            <main>{ children }</main>
            <Footer />
        </div>
    )
}

export default Layout;