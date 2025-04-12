import Head from 'next/head';
import AboutPage from './../components/About';


export default function About(){
    return(
        <>
            <Head>
                <title>About | Srinivas Batthula</title>
                {/* Custom fonts, meta tags, or external scripts go here */}
                <meta name='title' content='About | Srinivas Batthula' />
                <meta name='author' content='Srinivas Batthula' />
                <meta name="description" content="learn more about srinivas batthula" />
                <meta name="keywords" content="Srinivas Batthula, btech, portfolio, Vercel, MERN stack developer, React developer, Next.js, MongoDB, Express.js, Node.js, full-stack developer, JavaScript, web development, front-end development, back-end development, software engineer, programming, java, python, seo, rest apis" />

                {/* Social Sharing... */}
                <meta property='og:title' content='Srinivas Batthula | Fullstack Developer Portfolio' />
                <meta property="og:type" content="website" />
                <meta property='og:description' content='Explore my recent Works and Projects on GitHub' />
                <meta property='og:url' content='https://portfolio-phi-three-63.vercel.app' />
                
                {/* SEO... */}
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://portfolio-phi-three-63.vercel.app" />
            </Head>
            <main>
                <AboutPage />
            </main>
        </>
    )
}