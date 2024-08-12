import EventResult from "@/components/MatchInfo/components/event-result/EventResult";
import "./header.scss";
import Command from "@/components/ui/command/Command";
import EventTeam from "@/components/MatchInfo/components/event-team/EventTeam";

interface Goal {
    id: number;
    time_to_display: string;
    time?: number;
    player_name: string,
    player_sname: 'Thiago Borbas',
}

interface Team {
    name: string;
    url_name: string;
    id: string;
    red_cards: number;
    goals?: Goal[];
    country_id: string;
}


const Header = ({
    teamsHeader,
    status,
    startTime,
    gameTime
} : {
    teamsHeader: Team[];
    status: {
        enum: number
    },
    startTime?: string;
    gameTime?: number;
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
                    scores={[0, 0]}
                    status={status}
                    penalties={[2, 2]}
                    description={""}
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