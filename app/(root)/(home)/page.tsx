
import { _SERVER_API } from "@/config/consts";
import ClientRefresh from "./_components/ClientRefresh";
import { LeaguesResponse } from "@/types/response";

async function getDataMain(): Promise<LeaguesResponse> {
    const res = await fetch(`${_SERVER_API}/games/today`, {
        next: {
            revalidate:5
        }
    });

    if (res.status !== 200) {
        throw new Error("Failed to fetch data");
    }

    const data = res.json();
    
    return data;
}

export default async function Page() {
    const data = await getDataMain();

    return (
        <>  
            <ClientRefresh initialData={data} />
        </>
    );
}
