import { _SERVER_API } from "@/config/consts";
import { LeaguesResponse } from "@/types/response";
import Today from "./_components/home/Today";

async function getData(): Promise<LeaguesResponse> {
    const res = await fetch(`${_SERVER_API}/games/today`, {
        cache: 'force-cache'
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    
    const data = await res.json();

    const ttl = data.TTL || 10; 

    return { leagues: data.leagues, calendar: data.calendar, ttl };
}

export default async function Page() {
    const { leagues, calendar, ttl } = await getData();

    await fetch(`${_SERVER_API}/games/today`, {
        cache: 'force-cache',
        next: { revalidate: ttl } 
    });

    return <Today calendar={calendar} leagues={leagues} />;
}