
import { _SERVER_API } from "@/config/consts";
import Today from "./_components/home/Today";
import RefreshWrapper from "@/components/RefreshWrapper";
import { getDataMain } from "@/lib/api";


export default async function Page() {
    const { leagues, calendar, ttl} = await getDataMain("/today");

    return (
        <RefreshWrapper interval={ttl * 1000}>
            <Today calendar={calendar} leagues={leagues} />;
        </RefreshWrapper>
    )
}
