import InfoList from "@/components/ui/info-list/InfoList"
import { GameInfo, HeadToHead, RecentForm, Statistic, Team } from "@/types/game-center"
import Blockh2h from "../h2h/Blockh2h";
import TeamMatchHistory from "../team-match-history/TeamMatchHistory";
import Stats from "../stats/Stats";


const TabsFirst = ({
    gameInfo,
    headToHead,
    teams,
    recentForm,
    statistics,
    
} : {
    headToHead: HeadToHead;
    gameInfo: GameInfo[];
    teams: Team[];
    recentForm: RecentForm;
    statistics: Statistic[];

}) => {

    return (
        <>
            {
                statistics && <Stats statistics={statistics}/>
            }
            <TeamMatchHistory resentForm={recentForm} teams={teams}/>
            {
                headToHead && <Blockh2h teams={teams} headToHead={headToHead}/>
            }
            {
                gameInfo && <InfoList gameInfo={gameInfo}/>
            }
        </>
    )
}

export default TabsFirst