import ContentBlock from "@/components/content-block/ContentBlock"
import H2hItem from "../h2h/_components/H2hItem"
import CommandImage from "@/components/ui/command/CommandImage"
import { LiveOdds, Team } from "@/types/game-center"



const LiveOdds = ({
    teams,
    showCountryFlags,
    liveOdds
} : {
    teams:Team[];
    showCountryFlags?: boolean;
    liveOdds?: LiveOdds;
}) => {
    return (
        <ContentBlock title="Cuotas en vivo">
                <div className="game-center__h2h">
                    <H2hItem>
                        <CommandImage
                            imagesStyles="h2h"
                            position="right"
                            showCountryFlags={showCountryFlags}
                            teamId={teams[0].id}
                            countryId={teams[0].country_id}
                            teamName={teams[0].name}
                        />
                        {/* <Text><span className="h2h-green">{headToHead.home_wins}</span> Viktoria</Text> */}
                    </H2hItem>
                    <H2hItem>
                        
                        X
                        
                        
                    </H2hItem>
                    <H2hItem>
                        <CommandImage
                            imagesStyles="h2h"
                            position="right"
                            showCountryFlags={showCountryFlags}
                            teamId={teams[1].id}
                            countryId={teams[1].country_id}
                            teamName={teams[1].name}
                        />
                        {/* <Text><span className="h2h-green">{headToHead.away_wins}</span> Viktoria</Text> */}
                    </H2hItem>
                </div>
        </ContentBlock>
    )
}

export default LiveOdds