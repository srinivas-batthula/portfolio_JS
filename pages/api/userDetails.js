// pages/api/userDetails.js


export default async function handler(req, res) {
    const userAgent = req.headers['user-agent'] || 'Unknown'
    const ip = req.headers['x-forwarded-for']?.toString().split(',')[0] || req.socket.remoteAddress || ''

    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`)
    const geo = await geoRes.json()

    res.status(200).json({
        ip,
        city: geo.city,
        country: geo.country_name,
        userAgent,
    })
}