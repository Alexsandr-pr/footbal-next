import PlayerBlock from '../player/Player';
import { FormationProps } from '@/lib/types/game-center';


const Formation = ({
    startingPlayers,
    type,
    stylesOption
} : FormationProps) => {

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
                    if(!pitch_location) return null
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