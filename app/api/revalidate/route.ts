
import { NextResponse } from "next/server";
import { _SERVER_API } from "@/config/consts";
import { LeaguesResponse } from "@/types/response";

let cachedData: LeaguesResponse | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 10 * 1000; 

async function fetchData(): Promise<LeaguesResponse> {
    const now = Date.now();

    if (cachedData && now - lastFetchTime < CACHE_DURATION) {
        return cachedData; 
    }
    const res = await fetch(`${_SERVER_API}/games/today`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    console.log(data)
    cachedData = { leagues: data.leagues, calendar: data.calendar, ttl: data.TTL || 10 };
    lastFetchTime = now;

    return cachedData;
}

export async function GET() {
    try {
        const data = await fetchData();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}