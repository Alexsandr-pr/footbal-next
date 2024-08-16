import EventResult from "@/components/MatchInfo/components/event-result/EventResult";
import "./header.scss";
import Command from "@/components/ui/command/Command";
import { Team } from "@/types/game-center";
import { Status } from "@/types";



const Header = ({
    scores,
    teamsHeader,
    status,
    startTime,
    gameTime,
    penalties,
    description
} : {
    teamsHeader: Team[];
    status: Status,
    startTime?: string;
    gameTime?: string;
    penalties?: [number, number] | [];
    scores?: [number, number];
    description?: string;
}) => {
    
    return (
        <div className="pole-header-grid">
            
            <div className="pole-header-block">
                <Command
                    textAlign="center"
                    distanseOffset={"-8px"}
                    position="right"
                    show_country_flags={true}
                    reverse={true}
                    classes="flex-col"
                    team={teamsHeader[0]}
                    imagesStyles="commandGameCenterHeader"
                />
            </div>
            
            <div className="pole-header-block">
                <EventResult
                    gameTime={gameTime}
                    startTime={startTime}
                    type="gamecenter"
                    redCards2={teamsHeader[1].red_cards}
                    redCards1={teamsHeader[0].red_cards}
                    scores={scores}
                    status={status}
                    penalties={penalties}
                    description={description}
                /> 
            </div>
            <div className="pole-header-block">
                <Command
                    textAlign="center"
                    distanseOffset={"-8px"}
                    position="right"
                    show_country_flags={true}
                    reverse={true}
                    classes="flex-col"
                    team={teamsHeader[1]}
                    imagesStyles="commandGameCenterHeader"
                />
            </div>
        </div>
    )
}

export default Header