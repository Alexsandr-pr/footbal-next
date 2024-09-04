
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
                source: '/today',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: `public, max-age=5, must-revalidate`
                    }
                ],
            },
            {
                source: '/yesterday',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: `public, max-age=5, must-revalidate`
                    }
                ],
            },
            {
                source: '/tomorrow',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: `public, max-age=5, must-revalidate`
                    }
                ],
            },
            
        ]
    },
};

export default nextConfig;

