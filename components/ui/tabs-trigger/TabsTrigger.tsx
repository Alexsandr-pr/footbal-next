"use client"

import { useSelector } from "react-redux";
import styles from "./tabs-trigger.module.scss";
import { RootState } from "@/store/store";

interface Trigger {
    label: string;
    route: string;
    cb: () => void;
}

interface TabsTriggerProps {
    data: Trigger[];
}

const TabsTrigger = ({ data } : TabsTriggerProps) => {
    const { tabsButtonParams } = useSelector((state:RootState) => state.gameCenter);

    const activeIndex = data.findIndex(trigger => trigger.route === tabsButtonParams);

    const styleSpan = {
        width: `calc(100% / ${data.length})`,
        left: `calc(100% / ${data.length} * ${activeIndex})`,
    }

    return (
        <div className={styles.triggers}>
            {
                data.map(({label, route, cb}) => {
                    const isActive = tabsButtonParams === route;
                    return (
                        <button onClick={cb} key={route}
                            
                            style={{color: isActive ?  "var(--green)" : "var(--white)"}} 
                            className={styles.button}>{label}
                        </button>
                    )
                })
            }
            <span style={styleSpan} className={styles.span}></span>
        </div> 
    )
}

export default TabsTrigger;
