
import "../game-center.scss";
import Header from "../_components/header/Header";
import PoleBlock from "../_components/pole/pole-block/PoleBlock";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import TabsTriggerBlock from "../_components/tabs-trigger/TabsTrigger";
import InfoList from "@/components/ui/info-list/InfoList";
import Prediction from "../_components/prediction/Prediction";
import { GameCenterResponse } from "@/types/game-center";

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

/******************************************** */

async function GameCenter({params} : Props) {
    const { game, TTL } = await getData(params.id);
    //"ebiajfb"
    console.log(game.teams)
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
            <Prediction prediction={game.prediction}/>
            {
                game?.players?.lineups && 
                <PoleBlock teamsLineups={game.players.lineups.teams} teams={game.teams}/>
            }

            {
                game?.game_info && <InfoList gameInfo={game?.game_info}/>
            }
            
        </div>
    );
}

export default GameCenter;