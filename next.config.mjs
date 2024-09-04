
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
        const response = await fetch('https://footbal-next.vercel.app/api/revalidate');
        const revalidateValues = await response.json();

        const createHeaders = (pageKey) => {
            const ttl = revalidateValues[pageKey] || 3600; 
            return [
                {
                    key: 'Cache-Control',
                    value: `public, max-age=${ttl}, must-revalidate`,
                },
            ];
        };
        return [
            {
                source: '/gamecenter',
                headers: createHeaders('gameCenter'),
            },
            {
                source: '/today',
                headers: createHeaders('today'),
            },
            {
                source: '/yesterday',
                headers: createHeaders('yesterday'),
            },
            {
                source: '/tomorrow',
                headers: createHeaders('tomorrow'),
            },
            {
                source: '/dataDay',
                headers: createHeaders('dataDay'),
            },
        ]
    },
};

export default nextConfig;

