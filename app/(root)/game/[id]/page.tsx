"use client"
import PoleBlock from "../_components/pole/pole-block/PoleBlock";
import Stats from "../_components/stats/Stats";
import TeamMatchHistory from "../_components/team-match-history/TeamMatchHistory";
import Blockh2h from "../_components/h2h/Blockh2h";
import InfoList from "@/components/ui/info-list/InfoList";
import CalendarioEvents from "../_components/calendario-events/CalendarioEvents";
import Table from "@/components/table/Table";
import { _SERVER_API } from "@/config/consts";

import LiveOddsBlock from "../_components/live-odds/LiveOdds";
import PredictionBlock from "../_components/prediction/Prediction";
import Video from "../_components/video/Video";
import useSWR from 'swr'

type Props = {
    params: {
        id: string
    }
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function GameCenter({ params }: Props) {
    const { data, error } = useSWR(`https://www.sports-stats.net/gamecenter/${params.id}`,fetcher, {
        revalidateOnFocus: true,
        dedupingInterval: 1000,
    });

    if (error) return <div>Failed to load data</div>;
    if (!data) return <div>Loading...</div>;

    const { game } = data;

    return (
        <>
            <div className="gc-flex-16">
                {
                    game?.videos && <Video videos={game?.videos}/>
                }
                {
                    game?.prediction && <PredictionBlock status={game?.status} id={game.id} prediction={game?.prediction}/>
                }
                {
                    game?.live_odds && <LiveOddsBlock liveOdds={game?.live_odds} teams={game?.teams} showCountryFlags={game?.league?.show_country_flags}/>
                }
                
                {
                    game?.players?.lineups?.teams && <PoleBlock showCountryFlags={game?.league?.show_country_flags} activeTab="first" params={params} teamsLineups={game?.players?.lineups.teams} teams={game?.teams}/>
                }
                {
                    game?.standings && <Table standings={game.standings}/>
                }
                
                {
                    <CalendarioEvents events={game?.events}/> 
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
            </div>
        </>
    );
}
