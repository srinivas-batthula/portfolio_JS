import Head from 'next/head';
import AboutPage from './../components/About';


export default function About(){
    return(
        <>
            <Head>
                {/* Custom fonts, meta tags, or external scripts go here */}
                <meta name='title' content='About' />
                <meta name='author' content='Srinivas Batthula' />
                <meta name="description" content="learn more about srinivas batthula" />
                <meta name="keywords" content="srinivas, portfolio, mern stack developer, react, nextjs, mongodb, expressjs, nodejs, fullstack developer, javascript" />

                {/* Social Sharing... */}
                <meta property='og:title' content='Srinivas Batthula | Fullstack Developer Portfolio' />
                <meta property='og:description' content='Explore my recent Works and Projects on GitHub' />
                <meta property='og:url' content='https://portfolio-phi-three-63.vercel.app' />
            </Head>
            <main>
                <AboutPage />
            </main>
        </>
    )
}