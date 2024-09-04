import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log(`Middleware triggered for path: ${pathname}`); 

    const response = NextResponse.next();

    if (pathname.startsWith('/tomorrow')) {
        console.log('Setting Cache-Control for /tomorrow'); 
        response.headers.set('Cache-Control', 'public, max-age=60, s-maxage=120');
    } else if (pathname.startsWith('/yesterday')) {
        response.headers.set('Cache-Control', 'public, max-age=60, s-maxage=120');
    } else if (pathname.startsWith('/today')) {
        response.headers.set('Cache-Control', 'public, max-age=120, s-maxage=240');
    } else {
        response.headers.set('Cache-Control', 'public, max-age=30, s-maxage=60');
    }

    return response;
}

export const config = {
    matcher: ['/today', '/yesterday', '/tomorrow'],
};