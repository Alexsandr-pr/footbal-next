"use client"
import SecondTab from "../../_components/tabs/SecondTab";
import PoleBlock from "../../_components/pole/pole-block/PoleBlock";

import { _SERVER_API } from "@/config/consts";
import { useEffect, useState, useRef } from "react";
import Loading from "@/components/ui/loading/Loading";
import { GameCenterResponse } from "@/types/response";
import { Game } from "@/types/game-center";

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



const Page =  ({params} : Props) => {
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