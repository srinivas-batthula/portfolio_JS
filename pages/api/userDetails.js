// pages/api/userDetails.js

export default async function handler(req, res) {
    const userAgent = req.headers['user-agent'] || 'Unknown'
    let ip = req.headers['x-forwarded-for']?.toString().split(',')[0] || req.socket.remoteAddress || ''
    // ip = '8.8.8.8'      //Test location - US...
    let geo;

    try {
        const geoRes = await fetch(`https://get.geojs.io/v1/ip/geo/${ip}.json?timestamp=${Date.now()}`)
        geo = await geoRes.json()
    }
    catch (err) {
        console.error(err);
    }
    // Set Cache-Control header to prevent caching
    // res.setHeader('Cache-Control', 'no-store, max-age=0')

    return res.status(200).json({
        ip,
        city: geo.city || '',
        country: geo.country || '',
        userAgent,
    })
}
