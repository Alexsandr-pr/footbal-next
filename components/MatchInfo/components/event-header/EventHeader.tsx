"use client"
import { Bell, ChevronDown } from "lucide-react";
import styles from "./event-header.module.scss";

const EventHeader = ({
    cb, 
    show,
    name
} : {

    cb: () => void;
    show:boolean;
    name:string;
}) => {
    return (
        <div  className={styles.button}>
            <div className={styles.left}>
                <p>{name}</p>
            </div>
            <div className={styles.right}>
                <button className={styles.icon}>
                    <Bell width={16} height={18} strokeWidth={2} />
                </button>
                <button onClick={cb} className={styles.icon}>
                    <ChevronDown style={{transform: `${show ? "rotate(180deg)" : ""}`}}/>
                </button>
            </div>
        </div>
    )
}

export default EventHeader