
import React from "react";


import { extractTime } from "@/lib/utils";


import { EventTimeProps } from "@/types/props/match";

import styles from "./time.module.scss";
import { _SERVER_API } from "@/config/consts";
import FallbackImage from "../event-header/FallbackImage";


const EventTime = ({ 
    status, 
    startTime, 
    gameTimeToDisplay, 
    tv_networks
}: EventTimeProps) => {

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
            {tv_networks ? <FallbackImage
                    height={24}
                    width={24}
                    src={`${_SERVER_API}/images/tvnetworks/${tv_networks[0].id}`}
                    alt={tv_networks[0].name}
                /> : null}
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