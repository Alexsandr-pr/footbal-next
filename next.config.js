/** @type {import('next').NextConfig} */
const { getRevalidate } = require("./lib/revalidateState.js");

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.sports-stats.net',
                port: '', 
                pathname: '/images/**', 
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/today',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: `public, max-age=${getRevalidate("today")}, must-revalidate`
                    }
                ],
            },
        ]
    },
};

module.exports = nextConfig;