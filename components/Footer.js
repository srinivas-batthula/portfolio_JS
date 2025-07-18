import { useEffect } from 'react';
import styles from './../styles/Home.module.css';

export default function Footer() {
    useEffect(() => {                       // Inject the visitor-counter scripts dynamically...
        const timeout = setTimeout(() => {
            const authScript = document.createElement('script');
            authScript.src = 'https://www.freevisitorcounters.com/auth.php?id=084e02b0f913408356e205ddaa80248af9d07e49';
            authScript.async = true;

            const counterScript = document.createElement('script');
            counterScript.src = 'https://www.freevisitorcounters.com/en/home/counter/1353995/t/7';
            counterScript.async = true;

            const container = document.getElementById('visitor-counter');
            if (container) {
                container.appendChild(authScript);
                container.appendChild(counterScript);
            }
        }, 100); // delay to ensure DOM is ready

        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className={styles.footer}>
            <div className={styles.footerChild1}>
                Designed and Developed by{' '}
                <span style={{ color: 'rgb(251, 53, 251)', fontWeight: 'bold', fontStyle: 'italic' }}>
                    Srinivas Batthula
                </span>
            </div>

            {/* Visitor Counter Block */}
            <div id="visitor-counter" style={{ textAlign: 'center', marginTop: '10px' }}>
                {/* Hide the free link but keep it in DOM */}
                <a href="http://www.freevisitorcounters.com" style={{ display: 'none' }}>
                    on freevisitorcounters.com
                </a>
            </div>

            <div className={styles.footerChild2}>
                Copyright © {new Date().getFullYear()} BSP
            </div>

            <div className={styles.footerChild3}>
                <a
                    href="https://www.linkedin.com/in/srinivas-batthula/"
                    rel="me"
                    title="LinkedIn"
                    target="_blank"
                    style={{ fontSize: '1.5rem', color: 'skyblue', marginRight: '1rem' }}
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                    href="https://github.com/srinivas-batthula/"
                    rel="me"
                    title="GitHub"
                    target="_blank"
                    style={{ fontSize: '1.5rem', color: 'white', marginRight: '1rem' }}
                >
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    );
}
