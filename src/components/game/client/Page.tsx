"use client"

import Loading from "@/components/ui/loading/Loading";
import { _SERVER_API } from "@/lib/config/consts";

import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import Blockh2h from "../_components/h2h/Blockh2h";
import TeamMatchHistory from "../_components/team-match-history/TeamMatchHistory";
import Stats from "../_components/stats/Stats";
import CalendarioEvents from "../_components/calendario-events/CalendarioEvents";
import PoleBlock from "../_components/pole/pole-block/PoleBlock";
import LiveOddsBlock from "../_components/live-odds/LiveOdds";
import PredictionBlock from "../_components/prediction/Prediction";
import VideoBlock from "../_components/video/Video";
import InfoList from "@/components/ui/info-list/InfoList";
import Table from "@/components/ui/table/Table";



type Props = {
    id: string
}


const Page = ({id }: Props) => {
    const data = useSelector((state:RootState) => state.gameCenter.data)
    const game = data?.game;
    if (!game) return <Loading size={32} clazz="loading" />;

    let dataTrigger;

    if(game?.players?.lineups || game?.players?.missing_players) {
        dataTrigger = [
            {
                label: "VISTA PREVIA",
                route: `/game/${id}`,
            },
            {
                label: "LINAUPS",
                route: `/game/${id}/lineups`,
            }
        ]
    } else {
        dataTrigger = [
            {
                label: "VISTA PREVIA",
                route: `/game/${id}`,
            },
        ]
    }
    
    

    return (
        <>
            <div className="gc-flex-16">
                {game?.videos && <VideoBlock videos={game?.videos}/>}
                {game?.prediction && <PredictionBlock status={game?.status} id={game.id} prediction={game?.prediction}/>}
                {game?.live_odds && <LiveOddsBlock liveOdds={game?.live_odds} teams={game?.teams} showCountryFlags={game?.league?.show_country_flags}/>}
                {game?.players?.lineups?.teams && <PoleBlock showCountryFlags={game?.league?.show_country_flags} activeTab="first" id={id} teamsLineups={game?.players?.lineups.teams} teams={game?.teams}/>} 
                {game?.standings && <Table nameMainTable={"Team"} buttonText={"FULL LEAGUE STANDING"} showNumber={true} standings={game.standings}/>}
                <CalendarioEvents/> 
                {game?.statistics && <Stats statistics={game?.statistics}/>}
                <TeamMatchHistory showCountryFlags={game?.league?.show_country_flags} resentForm={game?.recent_form} teams={game?.teams}/>
                {game?.head_to_head && <Blockh2h/> }
                {game?.game_info && <InfoList gameInfo={game?.game_info}/>}
            </div>
        </>
    )
};

export default Page;
