import { _SERVER_API } from "@/config/consts";
import { GameCenterResponse } from "@/types/response";

export async function getData(id: string): Promise<GameCenterResponse & { TTL: number }> {
    const res = await fetch(`${_SERVER_API}/gamecenter/${id}`, {
        cache: 'force-cache'
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    
    const data = await res.json();
    const ttl = data.TTL || 10;  // TTL по умолчанию 10 секунд

    return { ...data, TTL: ttl };
}
