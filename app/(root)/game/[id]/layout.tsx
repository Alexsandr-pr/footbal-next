
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { GameCenterResponse } from "@/types/response";
import { ReactNode } from "react";
import Header from "../_components/header/Header";
import TabsTrigger from "@/components/ui/tabs/TabsTrigger";

import LayoutContainer from "../_components/LayoutContainer";
import PredictionContainer from "../_components/prediction/PredictionContainer";

type Props = {
    children: ReactNode;
    params: {
        id: string
    }
}

async function getData(id: string): Promise<GameCenterResponse> {
    const res = await fetch(`https://sports-stats.net/gamecenter/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}
const Layout = async ({ children, params }: Props) => {
    const { game, TTL } = await getData(params.id);

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
        <LayoutContainer>
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
            <PredictionContainer prediction={game?.prediction} id={params.id}/>
            <TabsTrigger type="text" dataText={data}/>
            {children}
        </LayoutContainer>
    );
};

export default Layout;

