import Command from "@/components/ui/command/Command"
import { PoleCommandProps } from "@/types/game-center";

import "./pole-block-comand.scss"

const PoleCommand = ({
    team,
    distanseOffset,
    formation,
    showCountryFlags
} : PoleCommandProps) => {
    
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