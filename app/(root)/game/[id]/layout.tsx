
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { ReactNode } from "react";
import Header from "../_components/header/Header";
import TabsTrigger from "@/components/ui/tabs/TabsTrigger";
import LayoutContainer from "../_components/LayoutContainer";
import PredictionContainer from "../_components/prediction/PredictionContainer";
import { getData } from "@/lib/api";

type Props = {
    children: ReactNode;
    params: {
        id: string
    }
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
            <PredictionContainer liveOdds={game?.live_odds} showCountryFlags={game?.league?.show_country_flags} teams={game.teams} prediction={game?.prediction} id={params.id}/>
            <TabsTrigger type="text" dataText={data}/>
            {children}
        </LayoutContainer>
    );
};

export default Layout;

