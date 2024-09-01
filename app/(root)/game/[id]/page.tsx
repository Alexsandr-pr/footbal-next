"use client"
import {  useEffect, useRef, useState } from "react";
import "./layout.scss";
import Loading from "@/components/ui/loading/Loading";
import { GameCenterResponse } from "@/types/response";
import { _SERVER_API } from "@/config/consts";
import { Game } from "@/types/game-center";
import PoleBlock from "../_components/pole/pole-block/PoleBlock";
import Stats from "../_components/stats/Stats";
import TeamMatchHistory from "../_components/team-match-history/TeamMatchHistory";
import Blockh2h from "../_components/h2h/Blockh2h";
import InfoList from "@/components/ui/info-list/InfoList";
import CalendarioEvents from "../_components/calendario-events/CalendarioEvents";
import Table from "@/components/table/Table";
import LiveOddsBlock from "../_components/live-odds/LiveOdds";
import PredictionBlock from "../_components/prediction/Prediction";
import Video from "../_components/video/Video";

type Props = {
    params: {
        id: string
    }
}

const minimumTTL = 10; 

async function getData(id: string): Promise<GameCenterResponse> {
    const res = await fetch(`${_SERVER_API}/gamecenter/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    return data;
}

const Layout = ({params }: Props) => {
    const [game, setLeagues] = useState<Game>();
    const [ttl, setTTL] = useState<number>(minimumTTL);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const fetchData = async () => {
        try {
            const {TTL, game} = await getData(params.id);
            setLeagues(game);
            setTTL(TTL);  
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(fetchData, Math.max(ttl, minimumTTL) * 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [ttl]);

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
                <CalendarioEvents events={game?.events}/> 
                {game?.statistics && <Stats statistics={game?.statistics}/>}
                <TeamMatchHistory showCountryFlags={game?.league?.show_country_flags} resentForm={game?.recent_form} teams={game?.teams}/>
                {game?.head_to_head && <Blockh2h showCountryFlags={game?.league?.show_country_flags} teams={game?.teams} headToHead={game?.head_to_head}/>}
                {game?.game_info && <InfoList gameInfo={game?.game_info}/>}
            </div>
        </>
    )
};

export default Layout;
