"use client";
import { Bell, BellOff, ChevronDown } from "lucide-react";
import styles from "./event-header.module.scss";
import { useState } from "react";
import FallbackImage from './FallbackImage';

const EventHeader = ({
    cb,
    show,
    name,
    leagueId
}: {
    leagueId: string;
    cb: () => void;
    show: boolean;
    name: string;
}) => {
    const [state, setState] = useState(false);
    const defaultImage = '/assets/icons/world.webp';

    return (
        <div className={styles.button}>
            <div className={styles.left}>
                <FallbackImage 
                    src={`https://www.sports-stats.net/images/league/${leagueId}/1`} 
                    fallbackSrc={defaultImage} 
                    alt={name} 
                    width={14.7} 
                    height={14.7} 
                />
                {name}
            </div>
            <div className={styles.right}>
                <button onClick={() => setState(prev => !prev)} className={styles.icon}>
                {state ? (
                    <Bell color="var(--green)" width={16} height={18} strokeWidth={2} />
                ) : (
                    <BellOff color="var(--white)" width={16} height={18} strokeWidth={2} />
                )}
                </button>
                <button onClick={cb} className={styles.icon}>
                <ChevronDown style={{ transform: `${show ? "rotate(180deg)" : ""}` }} />
                </button>
            </div>
        </div>
    );
};

export default EventHeader;
