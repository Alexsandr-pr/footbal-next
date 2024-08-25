
"use client";
import "./block.scss";
import ContentBlock from "@/components/content-block/ContentBlock"
import CommandImage from "@/components/ui/command/CommandImage"
import { Blockh2hProps } from "@/types/game-center"
import { useState } from "react";
import H2hItem from "./_components/H2hItem";
import Text from "./_components/Text";
import HeadContent from "./_components/HeadContent";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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
                    <ItemChild
                        wins={headToHead.home_wins}
                        showCountryFlags={showCountryFlags}
                        teamId={teams[0].id}
                            countryId={teams[0].country_id}
                            teamName={teams[0].name}
                    />
                    <H2hItem>
                        <div className="h2h-item-block">
                            E
                        </div>
                        <Text><span className="h2h-yellow">{headToHead.draws}</span> Empates</Text>
                    </H2hItem>
                    <ItemChild
                        wins={headToHead.away_wins}
                        showCountryFlags={showCountryFlags}
                        teamId={teams[1].id}
                        countryId={teams[1].country_id}
                        teamName={teams[1].name}
                    />
                </div>
                {
                    expanded && <HeadContent teamsTop={teams} headToHead={headToHead}/>
                }
            </div>
        </ContentBlock>
    )
}
const ItemChild = ({
    teamId,
    countryId,
    teamName,
    wins,
    showCountryFlags
} : {
    teamId:string;
    countryId:string;
    teamName:string;
    wins?:number;
    showCountryFlags?:boolean;
}) => {
    return (
        <H2hItem>
            <CommandImage
                imagesStyles="h2h"
                position="right"
                showCountryFlags={showCountryFlags}
                teamId={teamId}
                countryId={countryId}
                teamName={teamName}
            />
            <Text><span className="h2h-green">{wins}</span> Viktoria</Text>
        </H2hItem>
    )
}



export default Blockh2h