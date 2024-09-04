import { NextRequest, NextResponse } from "next/server";
import { getDataMain } from "./lib/api";

const ttlCache: Record<string, number> = {};

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.pathname;
    let ttl = ttlCache[url] || 10; 

    if (!ttlCache[url]) {
        
        if (url.includes('tomorrow')) {
            const data = await getDataMain('/tomorrow', 'tomorrow');
            ttl = data.ttl || ttl;
        } else if (url.includes('today')) {
            const data = await getDataMain('/today', 'today');
            ttl = data.ttl || ttl;
        } else if (url.includes('yesterday')) {
            const data = await getDataMain('/yesterday', 'yesterday');
            ttl = data.ttl || ttl;
        }
        ttlCache[url] = ttl;
    }

    const response = NextResponse.next();
    response.headers.set('Cache-Control', `public, max-age=${ttl}, must-revalidate`);

    return response;
}
