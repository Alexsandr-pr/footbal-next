"use client"
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { ReactNode, useEffect, useState } from "react";
import Header from "../_components/header/Header";
import TabsTrigger from "@/components/ui/tabs/TabsTrigger";
import useSWR from 'swr'
import "./layout.scss";
import Loading from "@/components/ui/loading/Loading";

type Props = {
    children: ReactNode;
    params: {
        id: string
    }
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Layout = ({ children, params }: Props) => {
    const [dedupingInterval, setDedupingInterval] = useState(10000); 

    const { data, error } = useSWR(`https://www.sports-stats.net/gamecenter/${params.id}`, fetcher, {
        revalidateOnFocus: true,
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
            <div className="flex-24-breadcrumbs-gc">
                <Breadcrumbs 
                    leagueName={game?.league?.name}
                    commandSecond={game.teams[1].name} 
                    commandFirst={game.teams[0].name}
                />
                <Header
                    showCountryFlags={game?.league?.show_country_flags}
                    scores={game?.scores}
                    penalties={game?.penalties}
                    gameTime={game.game_time_to_display} 
                    startTime={game.start_time} 
                    status={game.status} 
                    teamsHeader={game.teams}
                    description={game?.description}
                />
            </div>
            
            <TabsTrigger clazz={""} type="text" dataText={dataTrigger}/>
            {children}
        </>
    )
};

export default Layout;
