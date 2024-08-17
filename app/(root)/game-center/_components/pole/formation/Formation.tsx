import React from 'react'
import PlayerBlock from '../player/Player';
import { Player } from '@/types/game-center';


const Formation = ({
    startingPlayers,
    type
} : {
    type?: number;
    startingPlayers: Player[];
}) => {

    return (
        <>
            {
                startingPlayers.map(player => {
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
                        <PlayerBlock 
                            position={position}
                            events={events}
                            substitution={substitution}
                            key={name}
                            top={type === 1}
                            jersey_num={jersey_num}
                            styles={{
                                left: `calc(${pitch_location.x}% - ${pitch_location.x === 0 ? "10px" : "70px"})`,
                                top: `calc(${pitch_location.y}% - 25px)`
                            }} 
                            player_short_name={player_short_name}
                            />
                        )
                })
            }
        </>
    )
}

export default Formation