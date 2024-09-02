"use client"
import SecondTab from "../../../_components/tabs/SecondTab";
import PoleBlock from "../../../_components/pole/pole-block/PoleBlock";

import { _SERVER_API } from "@/config/consts";
import Loading from "@/components/ui/loading/Loading";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type Props = {
    params: {
        id: string
    }
}

const Page =  ({params} : Props) => {
    const data = useSelector((state:RootState) => state.gameCenter.data);
    const game = data?.game
    
    if (!game) return <Loading size={32} clazz="loading" />;

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