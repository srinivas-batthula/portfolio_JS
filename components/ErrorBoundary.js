// components/ErrorBoundary.js

import React from 'react';
import Link from 'next/link';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2>Something went wrong.</h2>
                    <p>Please try again or go back to the home page.</p>
                    <Link href="/" legacyBehavior>
                        <a style={{
                            display: 'inline-block',
                            marginTop: '1rem',
                            padding: '0.5rem 1rem',
                            backgroundColor: '#0070f3',
                            color: '#fff',
                            borderRadius: '5px',
                            textDecoration: 'none'
                        }}>
                            Go to Home
                        </a>
                    </Link>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
