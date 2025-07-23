// pages/api/uptimer.js         { Run by VERCEL-CRON at 6:30AM everyday }...

// URL-format := `https://srinivas-batthula.vercel.app/api/uptimer?url=https://coflow-backend-bcgk.onrender.com&times=3`
export default async function handler(req, res) {
    const { url, times } = req.query;

    // Validate inputs
    if (!url || !times || isNaN(times) || parseInt(times) < 1)
        return res.status(400).json({ success: false, msg: 'Your provided URL or times are invalid!' });

    res.status(200).json({
        success: true,
        times,
        url,
        msg: `Requests will be sent to the URL provided with a delay!`
    });

    // Helper function for delay
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Sending req's to provided URL...
    const requestCount = parseInt(times);
    for (let i = 0; i < requestCount; i++) {
        // console.log(i);
        try {
            let data = await fetch(url);
            // data = await data.json();
            // console.log(data);
        }
        catch (err) {
            console.error(err);
        }

        if (i < requestCount - 1) {
            await delay(1000); // 1 second delay
        }
    }
}
