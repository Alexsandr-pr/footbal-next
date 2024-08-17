import React from 'react'
import PlayerBlock from '../player/Player';
import { Player } from '@/types/game-center';


const Formation = ({
    startingPlayers,
    type,
    stylesOption
} : {
    type?: number;
    startingPlayers: Player[];
    stylesOption: number;
}) => {

    const getStyles = (pitch_location: { x: number, y: number }, type?: number) => {
        switch (type) {
            case 1:
                return {
                    left: `calc(${pitch_location.x}% - ${pitch_location.x === 0 ? "10px" : "70px"})`,
                    top: `calc(${pitch_location.y}% - 25px)`
                };
            case 2:
                return {
                    right: `calc(${pitch_location.x}% - ${pitch_location.x === 0 ? "10px" : "70px"})`,
                    top: `calc(${pitch_location.y}% - 25px)`
                };
            case 3:
                return {
                    left: `calc(${pitch_location.y}% - 39px)`,
                    top: `calc(${pitch_location.x}% - ${pitch_location.x === 0 ? "20px" : "50px"})`
                };
            case 4:
                return {
                    left: `calc(${pitch_location.y}% - 39px)`,
                    bottom: `calc(${pitch_location.x}% - ${pitch_location.x === 0 ? "20px" : "50px"})`
                };
            default: {
                return {
                    left: `0`,
                    top: `0`
                };
            }
        }
    };

    return (
        <>
            {
                startingPlayers.map(player => {
                    const { pitch_location, name } = player;
                    return (
                        <PlayerBlock 
                            {...player}
                            key={name}
                            top={type === 1}
                            styles={getStyles(pitch_location, stylesOption)} 
                        />
                    )
                })
            }
        </>
    )
}

export default Formation