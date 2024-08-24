import Command from "@/components/ui/command/Command"

import "./pole-block-comand.scss"
import { Team } from "@/types/game-center";

const PoleCommand = ({
    team,
    distanseOffset,
    formation,
    showCountryFlags
} : {
    team: Team;
    distanseOffset?: string;
    formation: string;
    showCountryFlags?:boolean;
}) => {
    
    return (
        <div className="pole__block-comand ">
            <Command
                distanseOffset={distanseOffset}
                classes={"pole__comand-name"}
                reverse={true}
                show_country_flags={showCountryFlags}
                position="right"
                team={team}
                imagesStyles={"commandGameCenter"}
            />
            <div className="pole__disposition">{formation}</div>
        </div>
    )
}

export default PoleCommand