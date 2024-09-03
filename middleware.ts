import { NextResponse } from 'next/server';

export function middleware() {
    const response = NextResponse.next();
    const ttl = 60;
    response.headers.set('Cache-Control', `max-age=${ttl}, s-maxage=${ttl}, stale-while-revalidate=${ttl}`);
    return response;
}

export const config = {
    matcher: '/:path*', 
};
