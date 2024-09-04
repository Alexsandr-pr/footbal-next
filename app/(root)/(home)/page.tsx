import axios from "axios";
import { _SERVER_API } from "@/config/consts";
import ClientRefresh from "./_components/ClientRefresh";
import { LeaguesResponse } from "@/types/response";

async function getDataMain(): Promise<LeaguesResponse> {
    const res = await axios.get(`${_SERVER_API}/games/today`, {
        headers: {
            "Cache-Control":"max-age=10"
        },
    });

    if (res.status !== 200) {
        throw new Error("Failed to fetch data");
    }

    const data = res.data;
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
            <ClientRefresh initialData={data} />
        </>
    );
}
