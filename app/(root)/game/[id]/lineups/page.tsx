"use client"
import SecondTab from "../../_components/tabs/SecondTab";
import PoleBlock from "../../_components/pole/pole-block/PoleBlock";

import { _SERVER_API } from "@/config/consts";
import useSWR from 'swr'
import { useEffect, useState } from "react";
import Loading from "@/components/ui/loading/Loading";

type Props = {
    params: {
        id: string
    }
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Page =  ({params} : Props) => {
    const [dedupingInterval, setDedupingInterval] = useState(5000); 
    const { data, error } = useSWR(`https://www.sports-stats.net/gamecenter/${params.id}`,fetcher, {
        dedupingInterval: dedupingInterval,
    });
    
    useEffect(() => {
        if (data) {
            setDedupingInterval(data.TTL * 1000); 
        }
    }, [data]);

    if (error) return <div>Failed to load data</div>;
    if (!data) return <Loading size={32} clazz="loading" />;

    const { game } = data;
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