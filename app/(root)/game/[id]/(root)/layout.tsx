"use client"
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { ReactNode } from "react";
import Header from "../../_components/header/Header";
import TabsTrigger from "@/components/ui/tabs/TabsTrigger";
import "./layout.scss";
import { _SERVER_API } from "@/config/consts";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type Props = {
    children: ReactNode;
    params: {
        id: string
    }
}

const Layout = ({ children, params }: Props) => {
    const data = useSelector((state:RootState) => state.gameCenter.data);
    const game = data?.game
    
    

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
