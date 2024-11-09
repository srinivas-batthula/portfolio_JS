import React, { useState } from "react";
import Link from 'next/link'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './../styles/Navbar.module.css';

export default function NavbarResponsive() {
    const [isOpen, setIsOpen] = useState(false);
    // Function to handle collapsing the navbar
    const handleLinkClick = () => {
        setIsOpen(false); // Close the navbar when a link is clicked
    };
    const handleToggle = () => {
        setIsOpen(!isOpen); // Toggle the open/close state
    };
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={styles.navMain} expanded={isOpen}>
                <Container className={styles.navCon}>
                    <Navbar.Brand>
                        <Link href='/' className={styles.txt1}>B.S.P</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        className={styles.toggle}
                        onClick={handleToggle} // Toggle the navbar open/close
                    >
                        {/* Conditionally render hamburger or "X" icon based on isOpen state */}
                        {isOpen ? (
                            <span className={`${styles.svg} ${styles['x-icon']}`} style={{width:'2rem', height:'2rem', fontWeight:'bolder'}}> <i className="fa-solid fa-x" style={{fontSize:'1.8rem', color:'violet', textAlign:'center'}}></i> </span>
                        ) : (
                            <span className={`${styles.svg} ${styles['hamburger']}`} style={{width:'2rem', height:'2rem', fontWeight:'bolder'}}> <i className="fa-solid fa-bars" style={{fontSize:'1.8rem', color:'violet', textAlign:'center'}}></i> </span>
                        )}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav" className={styles.Collapse} style={{ color: 'white' }}>
                        <Nav className={styles.navBar}>
                            <div onClick={handleLinkClick}>
                                <Link href="/" className={styles.txt}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.svg}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg><span>Home</span>
                                </Link>
                            </div>

                            <div onClick={handleLinkClick}>
                                <Link href="/about" className={styles.txt}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.svg}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg><span>About</span>
                                </Link>
                            </div>

                            <div onClick={handleLinkClick}>
                                <Link href="/projects" className={styles.txt} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.svg}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                                    </svg><span>Projects</span>
                                </Link>
                            </div>

                            <div onClick={handleLinkClick}>
                                <Link href="/contact" className={styles.txt}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.svg}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                    </svg><span>Contact</span>
                                </Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
