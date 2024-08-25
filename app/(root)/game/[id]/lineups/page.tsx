import SecondTab from "../../_components/tabs/SecondTab";
import PoleBlock from "../../_components/pole/pole-block/PoleBlock";
import { getData } from "@/lib/api";

type Props = {
    params: {
        id: string
    }
}

const Page = async ({params} : Props) => {

    const { game, TTL } = await getData(params.id);

    return (
        <>  
            <div className="lineups-pole-gc">
                {
                    game?.players?.lineups?.teams && <PoleBlock showCountryFlags={game?.league?.show_country_flags} teamsLineups={game?.players?.lineups.teams} teams={game?.teams}/>
                }
            </div>
            <SecondTab showCountryFlags={game?.league?.show_country_flags} teamsLineups={game?.players?.lineups.teams} teams={game?.teams} missingPlayers={game?.players?.missing_players}/>
        </>
    )
}

export default Page