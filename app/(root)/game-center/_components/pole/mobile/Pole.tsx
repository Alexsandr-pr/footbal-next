
import PoleCommand from "../pole-block-comand/PoleCommand"

import "./pole.scss"

import Player from "../player/Player";
import { PoleProps } from "@/types/game-center";

const PoleMobile = ({
    teams,
    teamsLineups
} : PoleProps) => {

    
    return (
        <>
            <div className="pole__content">
                <div className="pole-block-top">
                    <PoleCommand
                        formation={teamsLineups[0].formation}
                        team={teams[0]}
                    />
                </div>
                <div className="pole__body pole-body">
                    <div className="pole-body__top-content">
                        <div data-pole className="pole-body__top">
                            {
                                teamsLineups[0].starting.map(player => {
                                    const {
                                        player_short_name, 
                                        pitch_location, 
                                        jersey_num, 
                                        substitution, 
                                        events,
                                        position,
                                        name
                                    } = player;
                                    return (
                                        <Player 
                                            position={position}
                                            events={events}
                                            substitution={substitution}
                                            key={name}
                                            top={true}
                                            jersey_num={jersey_num}
                                            styles={{
                                                left: `calc(${pitch_location.y}% - 39px)`,
                                                top: `calc(${pitch_location.x}% - ${pitch_location.x === 0 ? "20px" : "50px"})`
                                            }} 
                                            player_short_name={player_short_name}
                                        />
                                    )
                                })
                            }
                            <span className="pole__rectanle-top">
                                <picture>
                                    <source media="(min-width:500px )" srcSet="/assets/game-center/Rectangle.svg" type="image/svg+xml"/>
                                    <img src="/assets/game-center/rectangle-mobile.svg" alt="image"/>
                                </picture>
                            </span>
                        </div>
                    </div>
                    <div className="pole-body__bottom-content">
                        <div data-pole className="pole-body__bottom">
                            {
                                teamsLineups[0].starting.map(player => {
                                    const {
                                        player_short_name, 
                                        pitch_location, 
                                        jersey_num, 
                                        substitution, 
                                        events,
                                        position,
                                        name
                                    } = player;
                                    return (
                                        <Player 
                                            position={position}
                                            events={events}
                                            substitution={substitution}
                                            key={name}
                                            jersey_num={jersey_num}
                                            styles={{
                                                left: `calc(${pitch_location.y}% - 39px)`,
                                                bottom: `calc(${pitch_location.x}% - ${pitch_location.x === 0 ? "20px" : "50px"})`
                                            }} 
                                            player_short_name={player_short_name}
                                        />
                                    )
                                })
                            }
                            <span className="pole__rectanle-bottom">
                                <picture>
                                    <source media="(min-width:500px )" srcSet="/assets/game-center/Rectangle.svg" type="image/svg+xml"/>
                                    <img src="/assets/game-center/rectangle-mobile.svg" alt="image"/>
                                </picture>
                            </span>
                        </div>
                    </div>
                    <span className="pole__rectangle-center"></span>
                    <span className="pole__rectangle-circle"></span>
                </div>

                <div className="pole-block-bottom">
                    <PoleCommand
                        formation={teamsLineups[1].formation}
                        team={teams[1]}
                    />
                </div>
            </div>
        </>
    )
}

export default PoleMobile