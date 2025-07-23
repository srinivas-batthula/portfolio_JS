// pages/api/uptimer.js         { Run by VERCEL-CRON at 6:30AM everyday }...

// URL-format := `https://srinivas-batthula.vercel.app/api/uptimer?url=https://coflow-backend-bcgk.onrender.com&times=3`
export default async function handler(req, res) {
    const { url, times } = req.query;

    // Validate inputs
    if (!url || !times || isNaN(times) || parseInt(times) < 1) {
        // return res.status(400).json({ success: false, msg: 'Your provided URL or times are invalid!' });
        url = "https://coflow-backend-bcgk.onrender.com/";
        times = "3";
    }

    res.status(200).json({
        success: true,
        times,
        url,
        msg: `Requests will be sent to the URL provided with a delay!`
    });

    // Helper function for delay
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Send requests asynchronously (fire-and-forget style)
    const requestCount = parseInt(times);
    (async () => {
        for (let i = 0; i < requestCount; i++) {
            try {
                const response = await fetch(url);
                // console.log(`[${i + 1}] ${url} → ${response.status}`);
            } catch (err) {
                console.error(`[${i + 1}] Error pinging ${url}:`, err.message);
            }

            if (i < requestCount - 1) {
                await delay(1000); // 1 second delay between requests
            }
        }
    })();
}
