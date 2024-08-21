
import Image from "next/image"
import styles from "./player.module.scss"
import { _SERVER_API } from "@/config/consts"

const Player = ({
    number,
    willPlay,
    name,
    willPlayStatus
} : {
    name: string;
    willPlay?:string;
    number:number;
    willPlayStatus:number;
}) => {
    return (
        <div className={styles.item}>
            <div className={styles.block}>
                <Image
                    width={14}
                    height={14}
                    src={`${_SERVER_API}/images/country/${"cb"}/1`}
                    alt="flag" 
                    className={styles.flag}
                />
                <div className={styles.number}>{number}</div>
            </div>
            <div className={styles.team}>
                <div style={{color: `var(${willPlayStatus === 2 ? "--live" : "--yellow"})`}} className={styles.status}>{willPlay}</div>
                <div className={styles.name}>{name}</div>
            </div>
        </div>
    )
}

export default Player