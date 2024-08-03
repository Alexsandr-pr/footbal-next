
import Link from "next/link";
import styles from "./tabs-trigger.module.scss";

interface Trigger {
    label: string;
    isActive:boolean;
    route: string;
}


interface TabsTriggerProps {
    data: Trigger[];
}

const TabsTrigger = ({ data } : TabsTriggerProps) => {
    return (
        <div className={styles.triggers}>
            {
                data.map(({label, isActive, route}) => {
                    return (
                        <Link key={route}
                            href={route}  
                            style={{color: isActive ?  "var(--green)" : "var(--white)"}} 
                            className={styles.button}>{label}
                        </Link>
                    )
                })
            }
            <span style={{width: "50%", left: 0}} className={styles.span}></span>
        </div> 
    )
}

export default TabsTrigger