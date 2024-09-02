import { _SERVER_API } from "@/config/consts";
import { GameCenterResponse, LeaguesResponse } from "@/types/response";

export async function getDataGameCenter(id: string): Promise<GameCenterResponse & { TTL: number }> {
    
    const res = await fetch(`${_SERVER_API}/gamecenter/${id}`,{cache: 'no-store'});

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    
    const data: GameCenterResponse = await res.json();
    return data;
}

export async function getDataMain(path: string): Promise<LeaguesResponse> {
    const res = await fetch(`${_SERVER_API}/games${path}`, {
        next: { revalidate: 60 }, 
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    const ttl = data.TTL;

    return { leagues: data.leagues, calendar: data.calendar, ttl };
}
