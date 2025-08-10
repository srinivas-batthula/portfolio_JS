// next.config.js

module.exports = {
    images: {
        // domains: ['srinivas-batthula.github.io'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'srinivas-batthula.github.io',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'srinivas-batthula.vercel.app',
                port: '',
                pathname: '/**',
            },
        ]
    },
    experimental: {
        optimizeFonts: true,
    },
};
