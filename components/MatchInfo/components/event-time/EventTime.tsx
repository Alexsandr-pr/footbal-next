import React from "react";

import { EventTimeProps } from "@/types/home";

import styles from "./time.module.scss";

import { SERVER_API } from "@/config/consts";
import { extractTime } from "@/lib/utils";


const EventTime = ({ status, startTime, gameTimeToDisplay }: EventTimeProps) => {

    

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
            <img height={24} width={24} src={`${SERVER_API}/images/team/ihb/4`} alt="" />
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
