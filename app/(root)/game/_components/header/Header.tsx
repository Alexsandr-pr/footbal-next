import EventResult from "@/components/MatchInfo/components/event-result/EventResult";
import "./header.scss";
import Command from "@/components/ui/command/Command";
import { HeaderGCProps } from "@/types/game-center";


const Header = ({
    scores,
    teamsHeader,
    status,
    startTime,
    gameTime,
    penalties,
    description,
    showCountryFlags
} : HeaderGCProps) => {

    return (
        <div className="pole-header-grid">
            
            <div className="pole-header-block">
                <Command
                    textAlign="center"
                    distanseOffset={"-8px"}
                    position="right"
                    show_country_flags={showCountryFlags}
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
                    show_country_flags={showCountryFlags}
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