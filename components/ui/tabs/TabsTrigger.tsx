"use client"

import Link from "next/link";
import CommandImage from "../command/CommandImage";
import styles from "./tabs-trigger.module.scss";
import { usePathname } from "next/navigation";

interface Trigger {
    label: string;
    route: string;
}
interface TriggerImages {
    countryId: string;
    teamId:string;
    route:string;
    cb:() => void;
}

interface TabsTriggerProps {
    dataText?: Trigger[];
    activeTab?:string;
    dataImage?: TriggerImages[];
    type?: "image" | "text";
    showCountryFlags?: boolean;
    clazz?: string;
}

const TabsTrigger = ({ 
    dataText, 
    activeTab, 
    dataImage,
    type,
    clazz,
    showCountryFlags
} : TabsTriggerProps) => {
    const pathname = usePathname();

    if(dataText?.length === 1 || dataImage?.length === 1) {
        return null
    }


    if(type === "text") {
        const activeIndex = dataText?.findIndex(trigger => trigger.route === pathname);
        
        const styleSpan = {
            width: `calc(100% / ${dataText?.length})`,
            left: `calc(100% / ${dataText?.length} * ${activeIndex})`,
        }
        return (
            <>
                <div style={{gridTemplateColumns: `repeat(${dataText?.length}, 1fr)`}}  className={`${styles.triggers} ${clazz}`}>
                    {
                        dataText && dataText?.map(({label, route}) => {
                            const isActive = pathname === route;
                            return (
                                <Link href={route} key={route}
                                    style={{color: isActive ?  "var(--green)" : "var(--white)"}} 
                                    className={styles.button}>{label}
                                </Link>
                            )
                        })
                    }
                    <span style={styleSpan} className={styles.span}></span>
                </div> 
            </>
        )
    }
    const activeIndex = dataImage?.findIndex(trigger => trigger.route === activeTab);

    const styleSpan = {
        width: `calc(100% / ${dataImage?.length})`,
        left: `calc(100% / ${dataImage?.length} * ${activeIndex})`,
    }

    return (
        <>
            <div style={{gridTemplateColumns: `repeat(${dataImage?.length}, 1fr)`}} className={styles.triggers}>
                {
                    dataImage && dataImage?.map(({route, cb, countryId, teamId}) => {
                        return (
                            <button onClick={cb} key={route}
                                className={styles.button}>
                                    <CommandImage
                                        position="right"
                                        showCountryFlags={showCountryFlags}
                                        imagesStyles="lineupsTab"
                                        teamName="teamId"
                                        teamId={teamId}
                                        countryId={countryId}
                                    />
                            </button>
                        )
                    })
                }
                <span style={styleSpan} className={styles.span}></span>
            </div> 
        </>
    )
}

export default TabsTrigger;
