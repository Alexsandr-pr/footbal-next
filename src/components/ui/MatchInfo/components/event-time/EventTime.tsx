
import React from "react";


import { extractTime } from "@/lib/utils";


import { EventTimeProps } from "@/lib/types/props/match";

import styles from "./time.module.scss";
import { _SERVER_API } from "@/lib/config/consts";
import FallbackImage from "../event-header/FallbackImage";


const EventTime = ({ 
    status, 
    startTime, 
    gameTimeToDisplay, 
    tv_networks,
    gameTimeStatusToDisplay
}: EventTimeProps) => {

    if (status.enum === 3) {
        return (
            <div className={styles.block}>
                <div className={styles.status}>
                    {gameTimeStatusToDisplay}
                </div>
            </div>
        );
    }
    if(status.enum === 1) {
        return (
            <div className={styles.block}>
                {tv_networks ? <FallbackImage
                        spinnerSize={12}
                        height={24}
                        width={24}
                        src={`${_SERVER_API}/images/tvnetworks/${tv_networks[0].id}`}
                        alt={tv_networks[0].name}
                    /> : null}
                <p className={styles.time}>{extractTime(startTime)}</p>
            </div>
        );
    }

    return (
        <div className={styles.block}>
            {tv_networks ? <FallbackImage
                    spinnerSize={12}
                    height={24}
                    width={24}
                    src={`${_SERVER_API}/images/tvnetworks/${tv_networks[0].id}`}
                    alt={tv_networks[0].name}
                /> : null}
            {gameTimeStatusToDisplay ? (
                <div style={{ color: "var(--live)" }} className={styles.live}>
                    {gameTimeStatusToDisplay}
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