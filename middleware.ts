import { NextResponse } from 'next/server';

export function middleware() {
    const response = NextResponse.next();
    const ttl = 5;
    response.headers.set('Cache-Control', `max-age=${ttl}, must-revalidate`);
    return response;
}

export const config = {
    matcher: '/:path*', 
};
