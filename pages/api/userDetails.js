// pages/api/userDetails.js

export default async function handler(req, res) {
    const userAgent = req.headers['user-agent'] || 'Unknown'
    let ip = req.headers['x-forwarded-for']?.toString().split(',')[0] || req.socket.remoteAddress || ''
    // ip = '8.8.8.8'      //Test location - US...

    const geoRes = await fetch(`https://get.geojs.io/v1/ip/geo/${ip}.json?timestamp=${Date.now()}`)
    const geo = await geoRes.json()

    // Set Cache-Control header to prevent caching
    res.setHeader('Cache-Control', 'no-store, max-age=0')
    
    res.status(200).json({
        ip,
        city: geo.city,
        country: geo.country,
        userAgent,
    })
}
