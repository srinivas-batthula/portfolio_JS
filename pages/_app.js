import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'
import '../styles/Navbar.css'
import Layout from '../components/Layout'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Toaster } from 'react-hot-toast'


function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Toaster position='top-right'/>
            <ErrorBoundary>
                <Component {...pageProps} />
            </ErrorBoundary>
        </Layout>
    )
}

export default MyApp;