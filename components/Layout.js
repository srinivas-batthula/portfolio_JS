'use client'

import React, { useEffect } from 'react'

import NavbarResponsive from './Navbar'
import Footer from './Footer'
import ParticlesBackground from './Background'

import styles from './../styles/Home.module.css'
import FunToast from './ToastFun'


const Layout = ({ children }) => {
                                //Redirect to 'vercel-deployment' if the current user is on 'github-pages'...
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const currentHost = window.location.hostname        // like 'srinivas-batthula.github.io/portfolio'...
            const correctHost = 'portfolio-phi-three-63.vercel.app'

            if (currentHost !== correctHost) {
                const currentPath = window.location.pathname /* like '/about'... */ + window.location.search /* like ?q=123 */ + window.location.hash /* like #about */

                const redirectTo = `https://${correctHost}${currentPath}`
                window.location.replace(redirectTo)             // better UX than 'window.location.href'...
            }
        }
    }, [])


return (
    <div className={styles.layoutDiv}>
        <ParticlesBackground />

        <div style={{ position: "relative" }}>
            <NavbarResponsive />

            <div className={styles.layoutDiv2}>
                <main>{children}</main>
            </div>

            <Footer />
        </div>

        <FunToast />
    </div>
)
}

export default Layout;