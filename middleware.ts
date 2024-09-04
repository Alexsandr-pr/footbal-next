import { NextRequest, NextResponse } from "next/server";
import { getDataGameCenter, getDataMain } from "./lib/api";

const ttlCache: Record<string, number> = {};

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.pathname;
    let ttl = ttlCache[url] || 10;

    const gamesPattern = /^\/games\/([^\/]+)$/; 
    const gamePattern = /^\/game\/([^\/]+)$/;

    if (!ttlCache[url]) {
        if (url.includes('tomorrow')) {
            const data = await getDataMain('/tomorrow', 'tomorrow');
            ttl = data.ttl || ttl;
        } else if (url.includes('/')) {
            const data = await getDataMain('/today', 'today');
            ttl = data.ttl || ttl;
        } else if (url.includes('yesterday')) {
            const data = await getDataMain('/yesterday', 'yesterday');
            ttl = data.ttl || ttl;
        } else if (gamesPattern.test(url)) {
            
            const match = url.match(gamesPattern);
            const paramsId = match ? match[1] : null; 

            if (paramsId) {
                const data = await getDataMain(`/games/${paramsId}`, 'dataDay');
                ttl = data.ttl || ttl;
            }
        } else if (gamePattern.test(url)) {
            
            const match = url.match(gamePattern);
            const gameId = match ? match[1] : null;

            if (gameId) {
                const data = await getDataGameCenter(gameId);
                ttl = data.TTL || ttl;
            }
        }

        ttlCache[url] = ttl;
    }

    const response = NextResponse.next();
    response.headers.set('Cache-Control', `public, max-age=${ttl}, must-revalidate`);

    return response;
}
