import { _SERVER_API } from "@/config/consts";
import ClientRefresh from "../_components/ClientRefresh";
import { LeaguesResponse } from "@/types/response";

async function getDataMain(
    path: string,
): Promise<LeaguesResponse> {

    const res = await fetch(`${_SERVER_API}/games${path}`, {
        next: {
            revalidate: 5
        }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    const ttl = data.TTL;
    return { leagues: data.leagues, calendar: data.calendar, ttl };
}

export default async function Page() {

    const data = await getDataMain("/today");
    
    return (
        <>  
            <ClientRefresh initialData={data} />
        </>
    );
}