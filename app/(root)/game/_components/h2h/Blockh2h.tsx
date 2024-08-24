
"use client";
import "./block.scss";
import ContentBlock from "@/components/content-block/ContentBlock"
import CommandImage from "@/components/ui/command/CommandImage"
import { HeadToHead, Team } from "@/types/game-center"
import { useState } from "react";
import H2hItem from "./_components/H2hItem";
import Text from "./_components/Text";
import HeadContent from "./_components/HeadContent";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Blockh2hProps = {
    headToHead: HeadToHead;
    teams: Team[];
    showCountryFlags?:boolean;
}

const Blockh2h = ({headToHead, teams, showCountryFlags} : Blockh2hProps) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };
    const [block] = useAutoAnimate();

    return (
        <ContentBlock
            cb={() => handleToggle()}
            rotate={expanded ? "-90deg" : "90deg"}
            title="h2h"
            buttonText={expanded ? "Show less" : "Show more"}
        >
            <div ref={block} className="">
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
                        <Text><span className="h2h-green">{headToHead.home_wins}</span> Viktoria</Text>
                    </H2hItem>
                    <H2hItem>
                        <div className="h2h-item-block">
                            E
                        </div>
                        <Text><span className="h2h-yellow">{headToHead.draws}</span> Empates</Text>
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
                        <Text><span className="h2h-green">{headToHead.away_wins}</span> Viktoria</Text>
                    </H2hItem>
                </div>
                {
                    expanded && <HeadContent teamsTop={teams} headToHead={headToHead}/>
                }
            </div>
        </ContentBlock>
    )
}




export default Blockh2h