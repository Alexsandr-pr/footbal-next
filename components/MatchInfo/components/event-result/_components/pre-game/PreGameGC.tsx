
import { extractTime, formatDateString } from "@/lib/utils";
import styles from "./pre.module.scss";


const PreGameGC = ({
    description,
    startTime,
    statusName
} : {
    description?: string;
    startTime?: string | "";
    statusName?: string;
}) => {
    return (
        <div className={styles.body}>
            <div className={styles.time}>
                {extractTime(startTime)}
            </div>
            <div className={styles.block}>
                <div className={styles.date}>
                    {formatDateString(startTime)}
                </div>
                <div className={styles.description}>
                    {description}
                </div>
            </div>
            <div className={styles.text}>
                {statusName}
            </div>
        </div>
    )
}

export default PreGameGC