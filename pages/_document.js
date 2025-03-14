// src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Custom fonts, meta tags, or external scripts go here */}
                    <meta name='title' content='Srinivas Batthula' />
                    <meta name="description" content="Srinivas Batthula Portfolio" />
                    
                    {/*  Icon...  */}
                            {/* https://srinivas-batthula.github.io/portfolio */}
                    <link rel="icon" href="/icon.jpg" type="image/x-icon" />
                    
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
