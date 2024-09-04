import { _SERVER_API } from "@/config/consts";
import { GameCenterResponse, LeaguesResponse } from "@/types/response";
import { getRevalidate, setRevalidate } from "./revalidateState";
import { NextResponse } from 'next/server';

export async function getDataGameCenter(id: string): Promise<GameCenterResponse & { TTL: number }> {

    const res = await fetch(`${_SERVER_API}/gamecenter/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': `max-age=${getRevalidate("gameCenter")}`, 
        }
    })

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data: GameCenterResponse = await res.json();
    if (data.TTL) {
        setRevalidate('gameCenter', data.TTL);
    }

    return data;
}




export async function getDataGameCenterThunk(id: string): Promise<GameCenterResponse & { TTL: number }> {

    const res = await fetch(`${_SERVER_API}/gamecenter/${id}`, {
        next: {
            revalidate: getRevalidate("gameCenter")
        }
    })
    
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    console.log(getRevalidate("gameCenter"));
    const data: GameCenterResponse = await res.json();
    if (data.TTL) {
        setRevalidate('gameCenter', data.TTL);
    }

    return data;
}






export async function getDataMain(
    path: string,
    pageKey: "today" | "yesterday" | "tomorrow" | "dataDay"
): Promise<LeaguesResponse> {

    const res = await fetch(`${_SERVER_API}/games${path}`, {
        next: {
            revalidate: getRevalidate(pageKey)
        }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    console.log(`${getRevalidate(pageKey)}   ${new Date().toLocaleTimeString()}`);

    const ttl = data.TTL;
    if (ttl) {
        setRevalidate(pageKey, ttl); 
    }

    return { leagues: data.leagues, calendar: data.calendar, ttl };
}

