
import { Lineup, MissingPlayer, Player, Team } from "@/types/game-center"

import { useState } from "react";
import TabsBlock from "@/components/ui/tabs/TabsBlock";
import MissingPlayers from "../players/missing-players/MissingPlayers";
import Bench from "../players/bench/Bench";

const SecondTab = ({
    missingPlayers,
    teams,
    teamsLineups
} : {
    missingPlayers?: [MissingPlayer[],MissingPlayer[]];
    teams: Team[];
    teamsLineups: Lineup[];
}) => {
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
    console.log(`teamsLineups[0]`, teamsLineups[1].bench);
    console.log(`teamsLineups[1]`, teamsLineups[1].bench);

    return (
        <div className="flex-16">
            <TabsBlock type="image" activeTab={tab} dataImage={data}>

                {
                    tab === "first" ? <>
                        {<Bench title={"TITULARES"} bench={teamsLineups[0].starting}/>}
                        { teamsLineups[0].bench ?  <Bench title={"SUPLENTES"}  bench={teamsLineups[0].bench}/> : null}
                        {
                            missingPlayers?.[0] && <MissingPlayers missingPlayers={missingPlayers[0]}/>
                        }
                    </> : <>
                        {   <Bench title={"TITULARES"}  bench={teamsLineups[1].starting}/>}
                        {   teamsLineups[1].bench ? <Bench title={"SUPLENTES"}  bench={teamsLineups[1].bench}/> : null}
                        
                        {
                            missingPlayers?.[1] && <MissingPlayers missingPlayers={missingPlayers[1]}/>
                        }
                    </>
                }
                
                
            </TabsBlock>
            
        </div>
    )
}

export default SecondTab