
import "../game-center.scss";
import Header from "../_components/header/Header";
import PoleBlock from "../_components/pole/pole-block/PoleBlock";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import TabsTriggerBlock from "../_components/tabs-trigger/TabsTrigger";
import InfoList from "@/components/ui/info-list/InfoList";
import Prediction from "../_components/prediction/Prediction";
import { GameCenterResponse } from "@/types/response";
import { Metadata } from "next";
import TeamMatchHistory from "../_components/team-match-history/TeamMatchHistory";


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
    //"ebiajfb"
    
    return (
        <div className="flex-16">
            <Breadcrumbs 
                commandSecond={game.teams[1].name} 
                commandFirst={game.teams[0].name}
                />
            <Header 
                scores={game?.scores}
                penalties={game?.penalties}
                gameTime={game.game_time_to_display} 
                startTime={game.start_time} 
                status={game.status} 
                teamsHeader={game.teams}
                description={game?.description}
                />
            <TabsTriggerBlock/>
            {
                game?.prediction &&  <Prediction prediction={game.prediction}/>
            }
            {
                game?.players?.lineups && 
                <PoleBlock teamsLineups={game.players.lineups.teams} teams={game.teams}/>
            }


            <TeamMatchHistory resentForm={game.recent_form} teams={game.teams}/>
            {
                game?.game_info && <InfoList gameInfo={game?.game_info}/>
            }
            
        </div>
    );
}

export default GameCenter;