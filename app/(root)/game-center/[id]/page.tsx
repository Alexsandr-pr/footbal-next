import { OddsOption } from "@/types/home";
import "../game-center.scss";
import Header from "../_components/header/Header";
import PoleBlock from "../_components/pole/pole-block/PoleBlock";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import TabsTriggerBlock from "../_components/tabs-trigger/TabsTrigger";

type Props = {
    params: {
        id: string
    }
}

async function getData(id: string) {
    const res = await fetch(`https://sports-stats.net/gamecenter/${id}`);
    
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

interface Status {
    enum: number;
    name: string;
    short_name: string;
    symbol_name:string;
}
interface Players {

}

interface Option {
    name: string;
    votes: number;
    percentage: number;
    vote_url: string;
}
interface Options {
    options: Option[];
}

interface Prediction {
    bookie_id: string,
    cta_link: string,
    options: Options,
    total_votes: number,
    odds: OddsOption[];
}

interface Game {
    id:string;
    teams: [];
    scores: [number, number];
    agg_scores:  [number, number];
    description: string;
    status: Status;
    start_time: string;
    game_time: string;
    game_time_to_display:string;
    players: Players;
    prediction: Prediction;
}

/******************************************** */



async function GameCenter({params} : Props) {
    const { game } = await getData(params.id);
    //"ebiajfb"
    return (
        <div className="flex-16">
            <Breadcrumbs 
                commandSecond={game.teams[1].name} 
                commandFirst={game.teams[0].name}
                />
            <Header gameTime={game.game_time_to_display} startTime={game.start_time} status={game.status} teamsHeader={game.teams}/>
            <TabsTriggerBlock/>
            {
                game?.players?.lineups && 
            
            <PoleBlock teamsLineups={game.players.lineups.teams} teams={game.teams}/>
        }
        </div>
    );
}

export default GameCenter;