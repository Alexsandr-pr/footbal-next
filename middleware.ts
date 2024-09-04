import { NextRequest, NextResponse } from "next/server";
import { getDataGameCenter, getDataMain } from "./lib/api";

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.pathname;
    let ttl = 12; 
    const gamesPattern = /^\/games\/([^\/]+)$/;
    const gamePattern = /^\/game\/([^\/]+)$/;

    try {
        if (!gamesPattern.test(url) && !gamePattern.test(url)) {
            if (url.startsWith('/tomorrow')) {
                console.log(url)
                const data = await getDataMain('/tomorrow', 'tomorrow');
                ttl = data.ttl || ttl;
            } else if (url.startsWith('/')) {
                console.log(url)
                const data = await getDataMain('/today', 'today');
                ttl = data.ttl || ttl;
            } else if (url.startsWith('/yesterday')) {
                console.log(url)
                const data = await getDataMain('/yesterday', 'yesterday');
                ttl = data.ttl || ttl;
            }
        } else {
            
            if (gamesPattern.test(url)) {
                const match = url.match(gamesPattern);
                const paramsId = match ? match[1] : null;

                if (paramsId) {
                    console.log(url)
                    const data = await getDataMain(`/${paramsId}`, 'dataDay');
                    ttl = data.ttl || ttl;
                }
            } else if (gamePattern.test(url)) {
                console.log(url)
                const match = url.match(gamePattern);
                const gameId = match ? match[1] : null;

                if (gameId) {
                    
                    const data = await getDataGameCenter(gameId);
                    ttl = data.TTL || ttl;
                }
            }
        }

    } catch (error) {
        console.error(`Ошибка при обработке URL ${url}:`, error);
    } finally {
        const response = NextResponse.next();
        response.headers.set('Cache-Control', `public, max-age=${ttl}`);
        return response;
    }
}
