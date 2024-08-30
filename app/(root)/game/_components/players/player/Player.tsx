
import Image from "next/image"
import "./player.scss"
import { _SERVER_API } from "@/config/consts"
import { LineupsPlayerProps } from "@/types/game-center"

const Player = ({
    number,
    willPlay,
    name,
    willPlayColor,
    size,
    countryId
} : LineupsPlayerProps) => {
    return (
        <div className={`lineups-player-item ${size}`}>
            <div className={`lineups-player-block`}>
                {/* <Image
                    width={14}
                    height={14}
                    src={`${_SERVER_API}/images/country/${countryId}/1`}
                    alt="flag" 
                    className={'lineups-player-flag'}
                /> */}
                <div className={'lineups-player-number'}>{number}</div>
            </div>
            <div className={`lineups-player-team`}>
                <div style={{color: `var(${willPlayColor})`}} className={'lineups-player-status'}>{willPlay}</div>
                <div className={'lineups-player-name'}>{name}</div>
            </div>
        </div>
    )
}

export default Player