
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { ReactNode } from "react";
import Header from "../_components/header/Header";
import TabsTrigger from "@/components/ui/tabs/TabsTrigger";
import { getData } from "@/lib/api";
import "./layout.scss";
import { _SERVER_API } from "@/config/consts";
import Refresh from "../_components/Refresh";

type Props = {
    children: ReactNode;
    params: {
        id: string
    }
}

const Layout = async ({ children, params }: Props) => {
    const { game, TTL } = await getData(params.id);

    await fetch(`${_SERVER_API}/gamecenter/${params.id}`, {
        cache: 'force-cache',
        next: { revalidate: TTL } 
    });

    let data;

    if(game?.players?.lineups) {
        data = [
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
        data = [
            {
                label: "VISTA PREVIA",
                route: `/game/${params.id}`,
            },
        ]
    }
    
    return (
        <Refresh ttl={TTL}>
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
                
                <TabsTrigger clazz={""} type="text" dataText={data}/>
                {children}
            </>
        </Refresh>
        
    );
};

export default Layout;

