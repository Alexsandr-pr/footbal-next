import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getRevalidate } from './lib/revalidateState';


export async function middleware(req: NextRequest) {
    // const url = req.nextUrl.pathname;

    
    // let ttl = 10; 
    // if (url.includes('tomorrow')) ttl = getRevalidate('tomorrow') || ttl;
    // if (url.includes('/')) ttl = getRevalidate('today') || ttl;
    // if (url.includes('yesterday')) ttl = getRevalidate('yesterday') || ttl;

    
    // const response = NextResponse.next();

    
    // response.headers.set('Cache-Control', `public, max-age=${ttl}, must-revalidate`);

    // return response;
}
