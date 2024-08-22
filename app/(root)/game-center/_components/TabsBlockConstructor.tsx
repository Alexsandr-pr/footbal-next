"use client"
import { useState } from "react";
import TabsFirst from "./tabs/TabsFirst";
import SecondTab from "./tabs/SecondTab";
import { GameInfo, HeadToHead, Players, RecentForm, Statistic, Team } from "@/types/game-center";
import TabsBlock from "@/components/ui/tabs/TabsBlock";
import PoleBlock from "./pole/pole-block/PoleBlock";

const TabsBlockConstructor = ({
    headToHead,
    gameInfo,
    teams,
    recentForm,
    statistics,
    players
}: {
    headToHead: HeadToHead;
    gameInfo: GameInfo[];
    teams: Team[];
    recentForm: RecentForm;
    statistics: Statistic[];
    players:  Players;
}) => {
    const [tab, setTabActive] = useState("first");

    let data;
    if(players?.lineups) {
        data = [
            {
                label: "VISTA PREVIA",
                route: "first",
                cb: () => setTabActive("first")
            },
            {
                label: "LINAUPS",
                route: "second",
                cb: () => setTabActive("second")
            }
        ]
    } else {
        data = [
            {
                label: "VISTA PREVIA",
                route: "first",
                cb: () => setTabActive("first")
            }
        ]
    }
    

    return (
        <div className="flex-16">
            <TabsBlock type={"text"} activeTab={tab} data={data}>
                {
                    players?.lineups?.teams && <PoleBlock teamsLineups={players?.lineups.teams} teams={teams}/>
                }
                {
                    tab === "first" 
                    ? 

                    <TabsFirst 
                        gameInfo={gameInfo}
                        headToHead={headToHead}
                        statistics={statistics}
                        recentForm={recentForm}
                        teams={teams}
                    /> 

                    : <>
                        {
                            players?.lineups &&  <SecondTab teamsLineups={players?.lineups?.teams} teams={teams} missingPlayers={players?.missing_players}/>
                        }
                    </>
                }
            </TabsBlock>
            
        </div>
    )
}

export default TabsBlockConstructor