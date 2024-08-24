import { _SERVER_API } from "@/config/consts";
import { GameCenterResponse } from "@/types/response";

export async function getData(id: string): Promise<GameCenterResponse> {
    const res = await fetch(`${_SERVER_API}/gamecenter/${id}`, { cache: 'force-cache' });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}
