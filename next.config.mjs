
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
                source: '/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=37, must-revalidate'
                    }
                ],
            },
        ]
    },
};

export default nextConfig;

