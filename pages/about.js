import Head from 'next/head';
import AboutPage from './../components/About';
import { Schema } from '@/lib/schema.bundle'

export default function About() {
    return (
        <>
            <Head>
                <title>About | Srinivas Batthula</title>
                {/* Custom fonts, meta tags, or external scripts go here */}
                <meta name='title' content='About | Srinivas Batthula' />
                <meta name='author' content='Srinivas Batthula' />
                <meta name="description" content="know more about srinivas batthula" />
                <meta name="keywords" content="Srinivas Batthula, srinivas-batthula, btech, snist, sreenidhi college, ghatkesar, portfolio, Vercel, MERN stack developer, coflow, verseify, React.js, Next.js, MongoDB, Express.js, Node.js, full-stack developer, JavaScript, web development, front-end development, back-end development, software engineer, programming, java, python, seo, rest apis, pwa, progressive web apps" />

                {/* Social Sharing... */}
                <meta property='og:title' content='Srinivas Batthula | Fullstack Developer Portfolio' />
                <meta property="og:type" content="website" />
                <meta property='og:description' content='Explore my recent Works and Projects on GitHub' />
                <meta property='og:url' content='https://srinivas-batthula.vercel.app' />

                {/* SEO... */}
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://srinivas-batthula.vercel.app" />

                {/* Structured Data (JSON-LD)... */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(Schema)
                    }}
                ></script>
            </Head>
            <main>
                <AboutPage />
            </main>
        </>
    )
}