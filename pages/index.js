import Head from 'next/head';
import Home from './../components/Home';


export default function HomePage() {
    return (
        <>
            <Head>
                {/* Custom fonts, meta tags, or external scripts go here */}
                {/* <meta name='title' content='Contact' /> */}
                <meta name='author' content='Srinivas Batthula' />
                <meta name="description" content="srinivas batthula portfolio" />
                <meta name="keywords" content="srinivas, portfolio, mern stack developer, react, nextjs, mongodb, expressjs, nodejs, fullstack developer, javascript" />

                {/* Social Sharing... */}
                <meta property='og:title' content='Srinivas Batthula | Fullstack Developer Portfolio' />
                <meta property='og:description' content='Explore my recent Works and Projects on GitHub' />
                <meta property='og:url' content='https://portfolio-phi-three-63.vercel.app' />

                {/* SEO... */}
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://srinivas-batthula.github.io/portfolio" />
            </Head>
            <main>
                <Home />
            </main>
        </>
    )
}