import { extractTime } from "@/lib/utils";
import styles from "./time.module.scss";

const Time = ({
    startTime
}: {
    startTime?:string;
}) => {
    return (
        <div className={styles.time}>
            {extractTime(startTime)}
        </div>
    )
}

export default Time