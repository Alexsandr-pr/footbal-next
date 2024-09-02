
import { _SERVER_API } from "@/config/consts";
import RefreshWrapper from "@/components/RefreshWrapper";
import { getDataMain } from "@/lib/api";
import Home from "../_components/home/Home";

export default async function Page() {
    const { leagues, calendar, ttl} = await getDataMain("/tomorrow");

    return (
        <RefreshWrapper interval={ttl * 1000}>
            <Home calendar={calendar} leagues={leagues} />;
        </RefreshWrapper>
    )
}
