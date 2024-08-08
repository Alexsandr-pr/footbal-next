import React from "react";
import styles from "./time.module.scss";

interface EventTimeProps {
    status: {
        enum: number;
        name: string;
    };
    startTime: string;
    gameTimeToDisplay: string;
}

const EventTime = ({ status, startTime, gameTimeToDisplay }: EventTimeProps) => {

    function extractTime(datetime: string): string {
        const dateTimeParts = datetime.split(' ');
        if (dateTimeParts.length !== 2) {
            throw new Error('Invalid datetime format');
        }
        return dateTimeParts[1];
    }

    if (status.enum === 3) {
        return (
            <div className={styles.block}>
                <div className={styles.status}>
                    {status.name}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.block}>
            <img height={24} width={24} src="https://www.sports-stats.net/images/team/ihb/4" alt="" />
            {gameTimeToDisplay ? (
                <div style={{ color: "var(--live)" }} className={styles.live}>
                    {gameTimeToDisplay}
                </div>
            ) : (
                <p className={styles.time}>{extractTime(startTime)}</p>
            )}
        </div>
    );
};


const arePropsEqual = (prevProps: EventTimeProps, nextProps: EventTimeProps): boolean => {
    return (
        prevProps.status.enum === nextProps.status.enum &&
        prevProps.status.name === nextProps.status.name &&
        prevProps.startTime === nextProps.startTime &&
        prevProps.gameTimeToDisplay === nextProps.gameTimeToDisplay
    );
};


export default React.memo(EventTime, arePropsEqual);
