"use client"
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { ReactNode, useEffect, useState } from "react";
import Header from "../_components/header/Header";
import TabsTrigger from "@/components/ui/tabs/TabsTrigger";
import useSWR from 'swr'
import "./layout.scss";

type Props = {
    children: ReactNode;
    params: {
        id: string
    }
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Layout = ({ children, params }: Props) => {
    const [dedupingInterval, setDedupingInterval] = useState(0); 

    const { data, error, mutate } = useSWR(`https://www.sports-stats.net/gamecenter/${params.id}`, fetcher, {
        revalidateOnFocus: true,
        dedupingInterval: dedupingInterval,
    });

    useEffect(() => {
        mutate(); // Вызов ручной перезагрузки данных сразу после монтирования
    }, [mutate]);

    useEffect(() => {
        if (data) {
            setDedupingInterval(data.TTL * 1000); 
        }
    }, [data]);

    if (error) return <div>Failed to load data</div>;
    if (!data) return <div>Loading...</div>;

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
