import { _SERVER_API } from "@/config/consts";
import { GameCenterResponse, LeaguesResponse } from "@/types/response";
import { getRevalidate, setRevalidate } from "./revalidateState";

export async function getDataGameCenter(id: string): Promise<GameCenterResponse & { TTL: number }> {

    const res = await fetch(`${_SERVER_API}/gamecenter/${id}`, {
        cache: "no-store", 
        next: { revalidate: getRevalidate("gameCenter") }, 
    });
    
    // const res = await fetch(`${_SERVER_API}/gamecenter/${id}`, {
    //     next: { revalidate: getRevalidate("gameCenter") }, 
    // });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data: GameCenterResponse = await res.json();
    if (data.TTL) {
        setRevalidate('gameCenter', data.TTL);
    }

    return data;
}

export async function getDataMain(
    path: string,
): Promise<LeaguesResponse> {

    const res = await fetch(`${_SERVER_API}/games${path}`, {
        cache: "no-store", 
    });

    // const res = await fetch(`${_SERVER_API}/games${path}`, {
    //     next: { revalidate: getRevalidate(pageKey) }, 
    // });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    const ttl = data.TTL;
    // if (data.TTL) {
    //     setRevalidate(pageKey, ttl);
    // }
    return { leagues: data.leagues, calendar: data.calendar, ttl };
}
