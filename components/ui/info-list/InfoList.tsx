
import { GameInfo } from "@/types/game-center";
import  styles from "./info-list.module.scss"

const InfoList = ({
    gameInfo
} : {
    gameInfo?: GameInfo[];
}) => {
    return (
        <div className="game__info game-info">
            <ul className={styles.list}>
                {
                    gameInfo?.map(({key, value}) => {
                        return (
                            <li className={styles.item}>
                                <div className={styles.left}>{key}</div>
                                <div className={styles.right}>{value}</div>
                            </li>
                        )
                    })
                }
                
            </ul>
        </div> 
    )
}

export default InfoList