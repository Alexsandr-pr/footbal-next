import { _SERVER_API } from "@/config/consts";
import ClientRefresh from "./_components/ClientRefresh";
import { LeaguesResponse } from "@/types/response";

export const revalidate = 8;
async function getDataMain(
    path: string,
): Promise<LeaguesResponse> {

    console.log(`Fetching data from ${_SERVER_API}/games${path} at ${new Date().toISOString()}`);

    const res = await fetch(`${_SERVER_API}/games${path}`, {
        next: {
            revalidate: 5
        }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    console.log('Cache-Control:', res.headers.get('Cache-Control'));

    const data = await res.json();

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
