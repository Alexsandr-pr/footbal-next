

import styles from "./time.module.scss";

interface EventTimeProps {
    status: {
        enum: number;
    };
}

const EventTime = ({status} : EventTimeProps) => {

    if(status.enum === 3) {
        return (
            <div className={styles.block}>
                FINALE
            </div>
        )
    }
    return (
        <div className={styles.block}>
            <img height={24} width={24} src="https://www.sports-stats.net/images/team/ihb/4" alt="" />
            <p className={styles.time}>18:00</p>
        </div>
    )
}

export default EventTime