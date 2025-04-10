
export default function Custom404() {

    return (
        <div style={{ padding: '2rem', textAlign: 'center', height: '100vh', display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>500 - Server-side Error</h1>
            <p>Sorry, something went wrong on our end.</p>
            <a href="/">Go back home</a>
        </div>
    );
}
