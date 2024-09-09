

import styles from "./player.module.scss"
import { _SERVER_API } from "@/lib/config/consts"
import { LineupsPlayerProps } from "@/lib/types/game-center"

const Player = ({
    number,
    willPlay,
    name,
    willPlayColor,
    size,
    countryId
} : LineupsPlayerProps) => {
    return (
        <div className={`${styles.item} ${size === "max"  ? styles.max : ""}`}>
            <div className={styles.block}>
                {/* <Image
                    width={14}
                    height={14}
                    src={`${_SERVER_API}/images/country/${countryId}/1`}
                    alt="flag" 
                    className={styles.flag}
                /> */}
                <div className={styles.number}>{number}</div>
            </div>
            <div className={styles.team}>
                <div style={{color: `var(${willPlayColor})`}} className={styles.status}>{willPlay}</div>
                <div className={styles.name}>{name}</div>
            </div>
        </div>
    )
}

export default Player