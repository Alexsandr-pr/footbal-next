// import getRevalidate from './lib/revalidate.js';

/** @type {import('next').NextConfig} */

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
                source: '/:path*',  
                headers: [
                    {
                        key: 'Cache-Control',
                        value: `public, max-age=5, must-revalidate`
                    }
                ],
            }
            
        ];
    },
};

export default nextConfig;
