"use client"
import { useState } from "react";
import TabsFirst from "./tabs/TabsFirst";
import SecondTab from "./tabs/SecondTab";
import { GameInfo, HeadToHead, Players, Prediction, RecentForm, Statistic, Team } from "@/types/game-center";
import TabsBlock from "@/components/ui/tabs/TabsBlock";
import PoleBlock from "./pole/pole-block/PoleBlock";
import PredictionBlock from "./prediction/Prediction";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const TabsBlockConstructor = ({
    headToHead,
    gameInfo,
    teams,
    recentForm,
    statistics,
    players,
    prediction
}: {
    headToHead: HeadToHead;
    gameInfo: GameInfo[];
    teams: Team[];
    recentForm: RecentForm;
    statistics: Statistic[];
    players:  Players;
    prediction?:Prediction;
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
            },
        ]
    }
    
    const [block] = useAutoAnimate();

    return (
        <div ref={block} className="flex-16">
            <TabsBlock  childrenTop={
                tab === "first" ?
                <>
                
                {
                    prediction &&  <PredictionBlock prediction={prediction}/>
                }
            </> : null
            } type={"text"} activeTab={tab} data={data}>
                {
                    players?.lineups?.teams && <PoleBlock activeTab={tab} cb={() => setTabActive("second")} teamsLineups={players?.lineups.teams} teams={teams}/>
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