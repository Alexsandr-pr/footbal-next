
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
        const ttlToday = await fetchTTL('/today');
        const ttlYesterday = await fetchTTL('/yesterday');
        const ttlTomorrow = await fetchTTL('/tomorrow');

        return [
            {
                source: '/today',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: `public, max-age=${ttlToday}, must-revalidate`
                    }
                ],
            },
            {
                source: '/yesterday',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: `public, max-age=${ttlYesterday}, must-revalidate`
                    }
                ],
            },
            {
                source: '/tomorrow',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: `public, max-age=${ttlTomorrow}, must-revalidate`
                    }
                ],
            },
        ]
    },
};

async function fetchTTL(route) {
    const response = await fetch(`https://www.sports-stats.net/games${route}`);
    const data = await response.json();
    return data.ttl || 2; 
}

export default nextConfig;

