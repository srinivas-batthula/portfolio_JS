// /pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Schema } from '@/lib/schema.bundle'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Page Info... */}
                    <meta charSet='UTF-8' />
                    <meta name='title' content='Srinivas Batthula | Portfolio' />
                    <meta name='author' content='Srinivas Batthula' />
                    <meta name="description" content="Portfolio of Srinivas Batthula, MERN Stack Developer skilled in full-stack development, open source, and backend engineering." />
                    <meta name="keywords" content="Srinivas Batthula, srinivas-batthula, btech, engineering, snist, sreenidhi college, ghatkesar, hyderabad, portfolio, Vercel, MERN stack developer, Full Stack developer, Backend developer, sde, software engineer, Open Source, web development, problem solving, programming, projects, coflow, verseify, Java, Javascript, Python, Html, Css, Tailwindcss, Bootstrap, React, NextJs, Zustand, pwa, progressive web app, seo, indexedDB, offline, service workers, webmanifest, push notifications, json, Node.js, Express.js, FastAPI, web-push, nodemailer, openai, gemini api, razorpay, swagger docs, jwt, OAuth, cloudinary, multer, cors, rate limiter, helmet, pug, axios, npm, nodemon, mongoose, MongoDB, SQL, Databases, redis, caching, message queue, playwright, webscraping, node cron, socketio, websockets, realtime, jest, supertest, testing, mvc, rest apis, git, github, version control, Docker, containerization, render, vercel, netlify, deployment, api monitoring, scalable backend systems" />

                    {/*  Icon...  */}
                    <link rel="icon" href="/icon.png" type="image/png" />
                    <link rel="apple-touch-icon" href="/icon.png" />

                    {/* Font... */}
                    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />

                    {/* Social Sharing tags... */}
                    {/* Open Graph... */}
                    <meta property='og:title' content='Srinivas Batthula | Fullstack Developer Portfolio' />
                    <meta property="og:type" content="website" />
                    <meta property='og:description' content='Explore my work, projects, and open source contributions.' />
                    <meta property='og:image' content='https://srinivas-batthula.vercel.app/icon.png' />
                    <meta property='og:url' content='https://srinivas-batthula.vercel.app' />
                    {/* Twitter... */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Srinivas Batthula | Fullstack Developer Portfolio" />
                    <meta name="twitter:description" content="Explore my work, projects, and open source contributions." />
                    <meta name="twitter:image" content="https://srinivas-batthula.vercel.app/icon.png" />
                    <meta name="twitter:url" content="https://srinivas-batthula.vercel.app" />
                    <meta name="twitter:site" content="@Abhi07082005" />

                    {/* Google Search Console Meta tags... (As `Bing-Search` is imported from Google Search Console) */}
                    <meta name="google-site-verification" content="TbhDgBAon0JlcRZGcPav0DB8188B7S1doUU7vfQy0qY" />  {/* For Vercel deployment... */}
                    <meta name="google-site-verification" content="tgr9rQeA_88RwbcxrcZmCrRUBjbLWUBYb9jolb1cFM0" />  {/* For Github-Pages deployment... */}

                    {/* Yandex Search Webmaster Meta tags... */}
                    <meta name="yandex-verification" content="85fe45ce1c1befd1" />

                    {/* SEO tags... */}
                    <link rel="canonical" href="https://srinivas-batthula.vercel.app" />
                    {/* Sitemap */}
                    <link rel="sitemap" type="application/xml" href="https://srinivas-batthula.vercel.app/sitemap.xml" />
                    {/* Robots */}
                    <meta name="robots" content="index, follow" />

                    {/* CDN's... */}
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />

                    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

                    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet" />
                    <script src="https://cdn.tailwindcss.com"></script>

                    {/* Structured Data (JSON-LD)... */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(Schema)
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
