"use client"
import { Bell, BellOff, ChevronDown } from "lucide-react";
import styles from "./event-header.module.scss";
import { useState } from "react";

const EventHeader = ({
    cb, 
    show,
    name,
    leagueId
} : {
    leagueId:string;
    cb: () => void;
    show:boolean;
    name:string;
}) => {
    const [state, setState] = useState(false);
    return (
        <div  className={styles.button}>
            <div className={styles.left}>
                <img width={16} height={16} src={`https://www.sports-stats.net/images/league/${leagueId}/4`} alt={name} />
                <p>{name}</p>
            </div>
            <div className={styles.right}>
                <button onClick={() => setState(prev => !prev)} className={styles.icon}>
                    {state ? (
                        <Bell color="var(--green)" width={16} height={18} strokeWidth={2} />
                    ) : 
                        <BellOff color="var(--white)" width={16} height={18} strokeWidth={2} />
                    }
                </button>
                <button onClick={cb} className={styles.icon}>
                    <ChevronDown style={{transform: `${show ? "rotate(180deg)" : ""}`}}/>
                </button>
            </div>
        </div>
    )
}

export default EventHeader