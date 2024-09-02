
"use client";
import "./block.scss";
import ContentBlock from "@/components/content-block/ContentBlock"
import CommandImage from "@/components/ui/command/CommandImage"
import { useState } from "react";
import H2hItem from "./_components/H2hItem";
import Text from "./_components/Text";
import HeadContent from "./_components/HeadContent";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Blockh2h = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };
    const [block] = useAutoAnimate();
    
    const { game } = useSelector((state:RootState) => state.gameCenter);

    if(!game) return null;


    return (
        <ContentBlock
            size="min"
            cb={() => handleToggle()}
            rotate={expanded ? "-90deg" : "90deg"}
            title="h2h"
            buttonText={(expanded && game?.head_to_head?.games.length > 0) ? "Show less" : "Show more"}
        >
            <div ref={block} className="">
                <div className="game-center__h2h game-center__h2h-top">
                    <ItemChild
                        wins={game?.head_to_head.home_wins}
                        showCountryFlags={game?.league?.show_country_flags}
                        teamId={game.teams[0].id}
                            countryId={game.teams[0].country_id}
                            teamName={game.teams[0].name}
                    />
                    <H2hItem>
                        <div className="h2h-item-block">
                            E
                        </div>
                        <Text><span className="h2h-yellow">{game?.head_to_head?.draws}</span> Empates</Text>
                    </H2hItem>
                    <ItemChild
                        wins={game?.head_to_head.away_wins}
                        showCountryFlags={game?.league?.show_country_flags}
                        teamId={game.teams[1].id}
                        countryId={game.teams[1].country_id}
                        teamName={game.teams[1].name}
                    />
                </div>
                {
                    expanded && <HeadContent teamsTop={game?.teams} headToHead={game?.head_to_head}/>
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
            <Text><span className="h2h-green">{ wins}</span> Viktoria</Text>
        </H2hItem>
    )
}



export default Blockh2h