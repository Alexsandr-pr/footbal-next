import { _SERVER_API } from "@/config/consts";
import { GameCenterResponse } from "@/types/response";

export async function getData(id: string): Promise<GameCenterResponse & { TTL: number }> {
    
    const res = await fetch(`${_SERVER_API}/gamecenter/${id}`, {
        next: {revalidate: 10}
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    
    const data = await res.json();
    const ttl = data.TTL || 10; 

    return { ...data, TTL: ttl };
}
