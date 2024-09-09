import { _SERVER_API } from "@/lib/config/consts";
import { GameCenterResponse, LeaguesResponse } from "@/lib/types/response";
import { getRevalidate, setRevalidate } from "../revalidateState";



export async function getDataGameCenter(id: string): Promise<GameCenterResponse & { TTL: number }> {

    const res = await fetch(`${_SERVER_API}/gamecenter/${id}`)

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data: GameCenterResponse = await res.json();
    if (data.TTL) {
        setRevalidate('gameCenter', data.TTL);
    }
    const TTL = data.TTL;
    return { game: data.game, TTL};
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

    //console.log(`${getRevalidate(pageKey)}   ${new Date().toLocaleTimeString()}`);

    const TTL = data.TTL;
    if (TTL) {
        setRevalidate(pageKey, TTL); 
    }

    return { leagues: data.leagues, calendar: data.calendar, TTL };
}

