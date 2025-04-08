import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'
import '../styles/Navbar.css'
import Layout from '../components/Layout'
import { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Toaster position='top-right'/>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;