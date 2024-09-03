"use client"
import "./layout.scss";
import Loading from "@/components/ui/loading/Loading";
import { _SERVER_API } from "@/config/consts";
import PoleBlock from "../../_components/pole/pole-block/PoleBlock";
import Stats from "../../_components/stats/Stats";
import TeamMatchHistory from "../../_components/team-match-history/TeamMatchHistory";
import Blockh2h from "../../_components/h2h/Blockh2h";
import InfoList from "@/components/ui/info-list/InfoList";
import CalendarioEvents from "../../_components/calendario-events/CalendarioEvents";
import Table from "@/components/table/Table";
import LiveOddsBlock from "../../_components/live-odds/LiveOdds";
import PredictionBlock from "../../_components/prediction/Prediction";
import Video from "../../_components/video/Video";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

type Props = {
    params: {
        id: string
    }
}


const Layout = ({params }: Props) => {
    const data = useSelector((state:RootState) => state.gameCenter.data)
    const game = data?.game;
    if (!game) return <Loading size={32} clazz="loading" />;

    let dataTrigger;

    if(game?.players?.lineups) {
        dataTrigger = [
            {
                label: "VISTA PREVIA",
                route: `/game/${params.id}`,
            },
            {
                label: "LINAUPS",
                route: `/game/${params.id}/lineups`,
            }
        ]
    } else {
        dataTrigger = [
            {
                label: "VISTA PREVIA",
                route: `/game/${params.id}`,
            },
        ]
    }
    
    

    return (
        <>
            <div className="gc-flex-16">
                {game?.videos && <Video videos={game?.videos}/>}
                {game?.prediction && <PredictionBlock status={game?.status} id={game.id} prediction={game?.prediction}/>}
                {game?.live_odds && <LiveOddsBlock liveOdds={game?.live_odds} teams={game?.teams} showCountryFlags={game?.league?.show_country_flags}/>}
                {game?.players?.lineups?.teams && <PoleBlock showCountryFlags={game?.league?.show_country_flags} activeTab="first" params={params} teamsLineups={game?.players?.lineups.teams} teams={game?.teams}/>}
                {game?.standings && <Table standings={game.standings}/>}
                <CalendarioEvents/> 
                {game?.statistics && <Stats statistics={game?.statistics}/>}
                <TeamMatchHistory showCountryFlags={game?.league?.show_country_flags} resentForm={game?.recent_form} teams={game?.teams}/>
                {game?.head_to_head && <Blockh2h/> }
                {game?.game_info && <InfoList gameInfo={game?.game_info}/>}
            </div>
        </>
    )
};

export default Layout;
