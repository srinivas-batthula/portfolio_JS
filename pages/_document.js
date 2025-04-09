// src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Custom fonts, meta tags, or external scripts go here */}
                    <meta name='title' content='Portfolio' />
                    <meta name='author' content='Srinivas Batthula' />
                    <meta name="description" content="srinivas batthula portfolio" />
                    <meta name="keywords" content="srinivas, portfolio, mern stack developer, react, nextjs, mongodb, expressjs, nodejs, fullstack developer, javascript" />

                    {/* Social Sharing... */}
                    <meta property='og:title' content='Srinivas Batthula | Fullstack Developer Portfolio' />
                    <meta property='og:description' content='Explore my recent Works and Projects on GitHub' />
                    <meta property='og:url' content='https://portfolio-phi-three-63.vercel.app' />
                    
                    {/*  Icon...  */}
                            {/* https://srinivas-batthula.github.io/portfolio */}
                    <link rel="icon" href="/icon.jpg" type="image/x-icon" />

                    {/* Google Search Console Meta tag... */}
                    <meta name="google-site-verification" content="TbhDgBAon0JlcRZGcPav0DB8188B7S1doUU7vfQy0qY" />
                    
                    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />

                    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

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
