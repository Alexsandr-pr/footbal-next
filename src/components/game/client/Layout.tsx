"use client"
// import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { ReactNode } from "react";

import TabsTrigger from "@/components/ui/tabs/TabsTrigger";

import { _SERVER_API } from "@/lib/config/consts";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import Header from "../_components/header/Header";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";

type Props = {
    children: ReactNode;
    
        id: string
    
}

const Layout = ({ children, id }: Props) => {
    const data = useSelector((state:RootState) => state.gameCenter.data);
    const game = data?.game;
    

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
            <div className="flex-24-breadcrumbs-gc">
                {
                    game?.teams && <Breadcrumbs
                            leagueName={game?.league?.name}
                            commandSecond={game.teams[1].name} 
                            commandFirst={game.teams[0].name}
                        />
                }
                {game?.teams &&  <Header
                    showCountryFlags={game?.league?.show_country_flags}
                    scores={game?.scores}
                    penalties={game?.penalties}
                    gameTime={game.game_time_to_display} 
                    startTime={game.start_time} 
                    status={game.status} 
                    teamsHeader={game.teams}
                    description={game?.description}
                />}
            </div>
            
            <TabsTrigger clazz={""} type="text" dataText={dataTrigger}/>
            {children}
        </>
    )
};

export default Layout;
