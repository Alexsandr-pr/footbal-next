"use client"

import CommandImage from "../command/CommandImage";
import styles from "./tabs-trigger.module.scss";

interface Trigger {
    label: string;
    route: string;
    cb: () => void;
}
interface TriggerImages {
    countryId: string;
    teamId:string;
    route:string;
    cb:() => void;
}

interface TabsTriggerProps {
    dataText?: Trigger[];
    activeTab:string;
    dataImage?: TriggerImages[];
    type?: "image" | "text";
}

const TabsTrigger = ({ 
    dataText, 
    activeTab, 
    dataImage,
    type
} : TabsTriggerProps) => {

    if(type === "text") {
        const activeIndex = dataText?.findIndex(trigger => trigger.route === activeTab);
        const styleSpan = {
            width: `calc(100% / ${dataText?.length})`,
            left: `calc(100% / ${dataText?.length} * ${activeIndex})`,
        }
        return (
            <>
                <div style={{gridTemplateColumns: `repeat(${dataText?.length}, 1fr)`}}  className={styles.triggers}>
                    {
                        dataText && dataText?.map(({label, route, cb}) => {
                            const isActive = activeTab === route;
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
                                        showCountryFlags={true}
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
