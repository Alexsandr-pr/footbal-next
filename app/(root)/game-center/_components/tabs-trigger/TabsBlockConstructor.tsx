"use client"
import { RootState } from "@/store/store"
import { useSelector } from "react-redux";
import TabsFirst from "../tabs/TabsFirst";
import SecondTab from "../tabs/SecondTab";
import { GameInfo, HeadToHead, MissingPlayer, RecentForm, Statistic, Team } from "@/types/game-center";

const TabsBlockConstructor = ({
    headToHead,
    gameInfo,
    teams,
    recentForm,
    statistics,
    missingPlayers
}: {
    headToHead: HeadToHead;
    gameInfo: GameInfo[];
    teams: Team[];
    recentForm: RecentForm;
    statistics: Statistic[];
    missingPlayers?: [MissingPlayer[],MissingPlayer[]];
}) => {

    const tabsButtonParams = useSelector((state:RootState) => state.gameCenter.tabsButtonParams);

    return (
        <div className="flex-16">
            {
                tabsButtonParams === "first" 
                ? 
                <TabsFirst 
                    gameInfo={gameInfo}
                    headToHead={headToHead}
                    statistics={statistics}
                    recentForm={recentForm}
                    teams={teams}
                /> 
                : <SecondTab missingPlayers={missingPlayers}/>
            }
        </div>
    )
}

export default TabsBlockConstructor