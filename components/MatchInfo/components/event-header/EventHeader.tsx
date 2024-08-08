"use client";
import React, { useState } from "react";
import { Bell, BellOff, ChevronDown } from "lucide-react";
import styles from "./event-header.module.scss";
import FallbackImage from './FallbackImage';
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


interface EventHeaderProps {
    cb: () => void;
    show: boolean;
    name: string;
    leagueId: string;
    toggleSoundLocal: () => void;
    soundLocal:boolean;
}

const EventHeader = ({
    cb,
    show,
    name,
    leagueId,
    toggleSoundLocal,
    soundLocal
}: EventHeaderProps) => {

    const {sound} = useSelector(
        (state: RootState) => state.filter
    );

    return (
        <div className={styles.button}>
            <div className={styles.left}>
                <FallbackImage 
                    src={`https://www.sports-stats.net/images/league/${leagueId}/1`} 
                    alt={name} 
                    width={14.7} 
                    height={14.7} 
                />
                {name}
            </div>
            <div className={styles.right}>
                {
                    sound && <button onClick={toggleSoundLocal} className={styles.icon}>
                        {soundLocal ? (
                            <Bell color="var(--green)" width={16} height={18} strokeWidth={2} />
                        ) : (
                            <BellOff color="var(--white)" width={16} height={18} strokeWidth={2} />
                        )}
                    </button>
                }
                
                <button onClick={cb} className={styles.icon}>
                    <ChevronDown style={{ transform: `${show ? "rotate(180deg)" : ""}` }} />
                </button>
            </div>
        </div>
    );
};

const arePropsEqual = (prevProps: EventHeaderProps, nextProps: EventHeaderProps): boolean => {
    
    return (
        prevProps.show === nextProps.show &&
        prevProps.name === nextProps.name &&
        prevProps.leagueId === nextProps.leagueId &&
        prevProps.cb === nextProps.cb
    );
};


export default React.memo(EventHeader, arePropsEqual);
