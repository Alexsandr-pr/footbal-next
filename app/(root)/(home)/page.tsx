import { _SERVER_API } from "@/config/consts";
import ClientRefresh from "./_components/ClientRefresh";
import { LeaguesResponse } from "@/types/response";

export const revalidate = 8; 

async function getDataMain(): Promise<LeaguesResponse> {
    const res = await fetch(`${_SERVER_API}/games/today`, {
        next: { revalidate }, 
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return {
        leagues: data.leagues,
        calendar: data.calendar,
        ttl: data.TTL,
    };
}

export default async function Page() {

    const data = await getDataMain();

    return (
        <>  
            <p>Last update: {new Date().toLocaleTimeString()}</p>
            <ClientRefresh initialData={data} />
        </>
    );
}
