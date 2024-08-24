

import { GameCenterResponse } from "@/types/response";
import { Metadata } from "next";
import PoleBlock from "../_components/pole/pole-block/PoleBlock";
import Stats from "../_components/stats/Stats";
import TeamMatchHistory from "../_components/team-match-history/TeamMatchHistory";
import Blockh2h from "../_components/h2h/Blockh2h";
import InfoList from "@/components/ui/info-list/InfoList";


type Props = {
    params: {
        id: string
    }
}

async function getData(id: string): Promise<GameCenterResponse> {
    const res = await fetch(`https://sports-stats.net/gamecenter/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    
    const { game } = await getData(params.id);

    const title = `${game.teams[0].name} vs ${game.teams[1].name} - Match Details`;
    const description = `Details about the match between ${game.teams[0].name} and ${game.teams[1].name}.`;

    return {
        title,
        description,
        icons: '/favicon.png',
    };
};


/******************************************** */

async function GameCenter({params} : Props) {
    const { game, TTL } = await getData(params.id);


    return (
        <>
            {
                game?.players?.lineups?.teams && <PoleBlock  activeTab="first" params={params} teamsLineups={game?.players?.lineups.teams} teams={game?.teams}/>
            }

            {
                game?.statistics && <Stats statistics={game?.statistics}/>
            }
            <TeamMatchHistory resentForm={game?.recent_form} teams={game?.teams}/>
            {
                game?.head_to_head && <Blockh2h teams={game?.teams} headToHead={game?.head_to_head}/>
            }
            {
                game?.game_info && <InfoList gameInfo={game?.game_info}/>
            }
        </>
    );
}

export default GameCenter;