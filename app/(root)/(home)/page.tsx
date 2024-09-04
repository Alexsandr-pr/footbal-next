import { _SERVER_API } from "@/config/consts";
import ClientRefresh from "./_components/ClientRefresh";
import { LeaguesResponse } from "@/types/response";
import { getRevalidate, setRevalidate } from "@/lib/revalidateState";


async function getDataMain(
    path: string,
): Promise<LeaguesResponse> {

    console.log(`Fetching data from ${_SERVER_API}/games${path} at ${new Date().toISOString()}`);

    const res = await fetch(`${_SERVER_API}/games${path}`, {
        headers: {
            'Cache-Control': `max-age=${getRevalidate("today")}`, 
        }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    console.log('Cache-Control:', res.headers.get('Cache-Control'));

    const data = await res.json();
    if (data.TTL) {
        setRevalidate('today', data.TTL);
    }
    const ttl = data.TTL;
    return { leagues: data.leagues, calendar: data.calendar, ttl };
}

export default async function Page() {

    const data = await getDataMain("/today");

    return (
        <>  
        <p>Last update: {new Date().toLocaleTimeString()}</p>
        <ClientRefresh initialData={data} />
        </>
    );
}
