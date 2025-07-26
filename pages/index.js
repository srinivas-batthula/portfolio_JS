import Head from 'next/head';
import Home from './../components/Home';
import {Schema} from '@/lib/schema.bundle'

export default function HomePage() {
    return (
        <>
            <Head>
                {/* Page Info... */}
                <meta name='title' content='Srinivas Batthula | Portfolio' />
                <meta name='author' content='Srinivas Batthula' />
                <meta name="description" content="srinivas batthula portfolio" />
                <meta name="keywords" content="Srinivas Batthula, srinivas-batthula, btech, engineering, snist, sreenidhi college, ghatkesar, hyderabad, portfolio, Vercel, MERN stack developer, Full Stack developer, Backend developer, sde, software engineer, Open Source, web development, problem solving, programming, projects, coflow, verseify, Java, Javascript, Python, Html, Css, Tailwindcss, Bootstrap, React, NextJs, Zustand, pwa, progressive web app, seo, indexedDB, offline, service workers, webmanifest, push notifications, json, Node.js, Express.js, FastAPI, web-push, nodemailer, openai, gemini api, razorpay, swagger docs, jwt, OAuth, cloudinary, multer, cors, rate limiter, helmet, pug, axios, npm, nodemon, mongoose, MongoDB, SQL, Databases, redis, caching, message queue, playwright, webscraping, node cron, socketio, websockets, realtime, jest, supertest, testing, mvc, rest apis, git, github, version control, Docker, containerization, render, vercel, netlify, deployment, api monitoring, scalable backend systems" />

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
                <Home />
            </main>
        </>
    )
}