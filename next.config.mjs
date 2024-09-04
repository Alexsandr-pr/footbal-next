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
    // async headers() {
    //     return [
    //         {
    //             source: '/',
    //             headers: [
    //                 {
    //                     key: 'Cache-Control',
    //                     value: `public, max-age=${getRevalidate("today")}, must-revalidate`
    //                 }
    //             ],
    //         },
    //         {
    //             source: '/yesterday',
    //             headers: [
    //                 {
    //                     key: 'Cache-Control',
    //                     value: `public, max-age=${getRevalidate("yesterday")}, must-revalidate`
    //                 }
    //             ],
    //         },
    //         {
    //             source: '/tomorrow',
    //             headers: [
    //                 {
    //                     key: 'Cache-Control',
    //                     value: `public, max-age=${getRevalidate("tomorrow")}, must-revalidate`
    //                 }
    //             ],
    //         },
    //     ];
    // },
};

export default nextConfig;
