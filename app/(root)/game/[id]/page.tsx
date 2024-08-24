

import { GameCenterResponse } from "@/types/response";
import { Metadata } from "next";
import PoleBlock from "../_components/pole/pole-block/PoleBlock";
import Stats from "../_components/stats/Stats";
import TeamMatchHistory from "../_components/team-match-history/TeamMatchHistory";
import Blockh2h from "../_components/h2h/Blockh2h";
import InfoList from "@/components/ui/info-list/InfoList";
import CalendarioEvents from "../_components/calendario-events/CalendarioEvents";


type Props = {
    params: {
        id: string
    }
}

async function getData(id: string): Promise<GameCenterResponse> {
    const res = await fetch(`https://sports-stats.net/gamecenter/${id}`, { cache: 'force-cache'});

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    
    const { game } = await getData(params.id);

    const title = `${game?.league?.name} - ${game.teams[0].name} vs ${game.teams[1].name} - Match Details`;
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

    // penalties events id 
    // ebebacj
    return (
        <>
            {
                <CalendarioEvents events={game?.events}/>
            }
            {
                game?.players?.lineups?.teams && <PoleBlock showCountryFlags={game?.league?.show_country_flags} activeTab="first" params={params} teamsLineups={game?.players?.lineups.teams} teams={game?.teams}/>
            }

            {
                game?.statistics && <Stats statistics={game?.statistics}/>
            }
            <TeamMatchHistory showCountryFlags={game?.league?.show_country_flags} resentForm={game?.recent_form} teams={game?.teams}/>
            {
                game?.head_to_head && <Blockh2h showCountryFlags={game?.league?.show_country_flags} teams={game?.teams} headToHead={game?.head_to_head}/>
            }
            {
                game?.game_info && <InfoList gameInfo={game?.game_info}/>
            }
        </>
    );
}

export default GameCenter;