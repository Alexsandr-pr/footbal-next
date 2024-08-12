import Command from "@/components/ui/command/Command"
import { Team } from "@/types/home"
import "./pole-block-comand.scss"

const PoleCommand = ({
    team,
    distanseOffset,
    formation
} : {
    team: Team;
    distanseOffset?: string;
    formation: string;
}) => {
    return (
        <div className="pole__block-comand ">
            <Command
                distanseOffset={distanseOffset}
                classes={"pole__comand-name"}
                reverse={true}
                show_country_flags={true}
                position="right"
                team={team}
                imagesStyles={"commandGameCenter"}
            />
            <div className="pole__disposition">{formation}</div>
        </div>
    )
}

export default PoleCommand