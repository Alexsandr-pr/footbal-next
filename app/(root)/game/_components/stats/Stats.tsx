
"use client";
import React, { useState } from "react";
import ContentBlock from "@/components/content-block/ContentBlock";
import styles from "./stats.module.scss";
import { StatsProps } from "@/types/game-center";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { normalizePercentages } from "@/lib/utils";

const Stats = ({
    statistics
}: StatsProps) => {
    const displayQuantity = 4;
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const visibleStatistics = expanded ? statistics : statistics?.slice(0, displayQuantity);
    const [block] = useAutoAnimate();

    return (
        <ContentBlock 
            size='min'
            rotate={expanded ? "-90deg" : "90deg"}
            cb={statistics && statistics.length > displayQuantity ? handleToggle : undefined} 
            title="ESTADÍSTICAS DEL PARTIDO" 
            buttonText={statistics?.length <= 4 ? "" : expanded ? "VER MENOS" : "VER MÁS"}
            buttonColor={"white"}
        >
            <div ref={block} className={styles.items}>
                {
                    visibleStatistics?.map((item) => {
                        const normalizedPercentages = normalizePercentages(item.percentages);
                        return (
                            <div key={item.name} className={styles.item}>
                                <div className={styles.title}>
                                    {item.name}
                                </div>
                                <div className={styles.flex}>
                                    <div style={{ width: `${normalizedPercentages[0]}%` }} className={styles.block}>
                                        {item.values[0]}
                                    </div>
                                    <div style={{ width: `${normalizedPercentages[1]}%` }} className={styles.block}>
                                        {item.values[1]}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </ContentBlock>
    );
}

export default Stats;
