import { GameCenterResponse } from "@/types/response";
import SecondTab from "../../_components/tabs/SecondTab";
import PoleBlock from "../../_components/pole/pole-block/PoleBlock";

type Props = {
    params: {
        id: string
    }
}

async function getData(id: string): Promise<GameCenterResponse> {
    const res = await fetch(`https://sports-stats.net/gamecenter/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


const Page = async ({params} : Props) => {

    const { game, TTL } = await getData(params.id);

    return (
        <>
            {
                game?.players?.lineups?.teams && <PoleBlock showCountryFlags={game?.league?.show_country_flags} teamsLineups={game?.players?.lineups.teams} teams={game?.teams}/>
            }
            <SecondTab showCountryFlags={game?.league?.show_country_flags} teamsLineups={game?.players?.lineups.teams} teams={game?.teams} missingPlayers={game?.players?.missing_players}/>
        </>
    )
}

export default Page