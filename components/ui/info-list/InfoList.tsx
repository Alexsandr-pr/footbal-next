
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
                    gameInfo?.map(({name, value}) => {
                        return (
                            <li key={name + value} className={styles.item}>
                                <div className={styles.block}>
                                    <div className={styles.left}>{name}</div>
                                    <div className={styles.right}>{value}</div>
                                </div>
                            </li>
                        )
                    })
                }
                
            </ul>
        </div> 
    )
}

export default InfoList