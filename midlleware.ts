import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const response = NextResponse.next();

    if (pathname.startsWith('/blog')) {
        response.headers.set('Cache-Control', 'public, max-age=120, s-maxage=240');
    } else if (pathname.startsWith('/product')) {
        response.headers.set('Cache-Control', 'public, max-age=60, s-maxage=120');
    } else {
        response.headers.set('Cache-Control', 'public, max-age=30, s-maxage=60');
    }

    return response;
}

export const config = {
    matcher: ['/today', '/yesterday', '/tomorrow'],
};
