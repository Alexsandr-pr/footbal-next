"use client"
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { ReactNode, useEffect, useRef, useState } from "react";
import Header from "../_components/header/Header";
import TabsTrigger from "@/components/ui/tabs/TabsTrigger";
import "./layout.scss";
import Loading from "@/components/ui/loading/Loading";
import { GameCenterResponse } from "@/types/response";
import { _SERVER_API } from "@/config/consts";
import { Game } from "@/types/game-center";

type Props = {
    children: ReactNode;
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

const Layout = ({ children, params }: Props) => {
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
