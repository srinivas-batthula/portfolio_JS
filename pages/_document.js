// src/pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* <title>Srinivas Batthula | Portfolio</title> */}
                    {/* Custom fonts, meta tags, or external scripts go here */}
                    <meta name='title' content='Srinivas Batthula | Portfolio' />
                    <meta name='author' content='Srinivas Batthula' />
                    <meta name="description" content="srinivas batthula portfolio website" />
                    <meta name="keywords" content="Srinivas Batthula, srinivas-batthula, btech, portfolio, Vercel, MERN stack developer, React.js, Next.js, MongoDB, Express.js, Node.js, full-stack developer, JavaScript, web development, front-end development, back-end development, software engineer, programming, java, python, seo, rest apis, pwa, progressive web apps" />

                    {/* Social Sharing... */}
                    <meta property='og:title' content='Srinivas Batthula | Fullstack Developer Portfolio' />
                    <meta property="og:type" content="website" />
                    <meta property='og:description' content='Explore my recent Works and Projects on GitHub' />
                    <meta property='og:url' content='https://srinivas-batthula.vercel.app' />

                    {/*  Icon...  */}
                    {/* https://srinivas-batthula.github.io/portfolio */}
                    <link rel="icon" href="/icon.png" type="image/png" />
                    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />

                    {/* Google Search Console Meta tags... */}
                    <meta name="google-site-verification" content="TbhDgBAon0JlcRZGcPav0DB8188B7S1doUU7vfQy0qY" />  {/* For Vercel deployment... */}
                    <meta name="google-site-verification" content="tgr9rQeA_88RwbcxrcZmCrRUBjbLWUBYb9jolb1cFM0" />  {/* For Github-Pages deployment... */}

                    {/* SEO... */}
                    <link rel="sitemap" type="application/xml" href="https://srinivas-batthula.vercel.app/sitemap.xml" />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href="https://srinivas-batthula.vercel.app" />

                    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />

                    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

                    {/* Structured Data (JSON-LD)... */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Person",
                                "name": "Srinivas Batthula",
                                "jobTitle":
                                    "MERN Stack Developer, Full Stack Developer, Backend Developer, SDE, Software Developer",
                                "url": "https://srinivas-batthula.vercel.app",
                                "sameAs": [
                                    "https://www.linkedin.com/in/srinivas-batthula/",
                                    "https://github.com/srinivas-batthula/",
                                    "https://leetcode.com/u/srinivas-batthula/",
                                    "https://www.instagram.com/srinivas_abhi8/",
                                    "https://x.com/Abhi07082005/"
                                ],
                                "worksFor": {
                                    "@type": "Organization",
                                    "name": "Sreenidhi Institute of Science and Technology, Hyderabad"
                                },
                                "skills":
                                    "MERN Stack, Full Stack, React, NextJs, Node.js, Express.js, FastAPI, MongoDB, SQL, JavaScript, Java, Python, pwa, progressive web apps",
                                "image": "https://srinivas-batthula.vercel.app/icon.png"
                            })
                        }}
                    ></script>

                </Head>
                <body>

                    <Main />
                    <NextScript />

                </body>
            </Html>
        );
    }
}

export default MyDocument;
