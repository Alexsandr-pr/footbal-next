"use client"
import { SecondTabProps } from "@/lib/types/game-center"
import { useState } from "react";
import TabsBlock from "@/components/ui/tabs/TabsBlock";
import MissingPlayers from "../players/missing-players/MissingPlayers";
import Bench from "../players/bench/Bench";

const SecondTab = ({
    missingPlayers,
    teams,
    teamsLineups,
    showCountryFlags
} : SecondTabProps) => {
    const [tab, setTab] = useState("first");

    const data = [
        {
            countryId: teams[0].country_id,
            teamId: teams[0].id,
            route: "first",
            cb:() => setTab("first")
        },
        {
            countryId: teams[1].country_id,
            teamId: teams[1].id,
            route: "second",
            cb:() => setTab("second")
        }
    ]
    
    return (
        <>
            {
                ((teamsLineups && (teamsLineups[0]?.bench || teamsLineups[1]?.bench)) || missingPlayers?.[0] || missingPlayers?.[1]) && (
                    <TabsBlock showCountryFlags={showCountryFlags} type="image" activeTab={tab} dataImage={data}>
                        <div className="flex-16-lineups-gc">
                            {
                                tab === "first" ? <>
                                    {teamsLineups && ( teamsLineups[0]?.bench ? <Bench title={"SUPLENTES"} bench={teamsLineups[0].bench}/> : null) }
                                    { missingPlayers?.[0] && <MissingPlayers missingPlayers={missingPlayers[0]}/> }
                                </> : <>
                                    {teamsLineups &&  (teamsLineups[1]?.bench ? <Bench title={"SUPLENTES"} bench={teamsLineups[1].bench}/> : null) }
                                    { missingPlayers?.[1] && <MissingPlayers missingPlayers={missingPlayers[1]}/> }
                                </>
                            }
                        </div>
                    </TabsBlock>
                )
            }
        </>
    )
}

export default SecondTab