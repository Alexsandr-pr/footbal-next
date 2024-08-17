"use client";
import React, { useEffect, useRef } from "react";
import { formatDateString, getGridStyle } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import PreGameGC from "./_components/pre-game/PreGameGC";

import { EventResultProps } from "@/types/props/match";

import styles from "./result.module.scss";

const EventResult = ({
    redCards2,
    redCards1,
    scores,
    status,
    penalties,
    description,
    soundLocal,
    type,
    startTime,
    gameTime
}: EventResultProps) => {
    const previousScoresRef = useRef<number[]>(scores || []);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const sound = useSelector((state: RootState) => state.filter.sound);

    useEffect(() => {
        audioRef.current = new Audio("/assets/sound/sound.mp3");
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (scores && previousScoresRef.current) {
            const scoresChanged = scores.some(
                (score, index) => score !== previousScoresRef.current[index]
            );
            if (scoresChanged && audioRef.current && sound && soundLocal) {
                audioRef.current.play();
            }
        }
        previousScoresRef.current = scores || [];
    }, [scores, sound, soundLocal]); 

    const colorStyle = { 
        color: status.enum === 2 ? "var(--live)" : "var(--white)", 
    };
    const colorStyleGameCenter = {
        color: "var(--white)",
    }

    const maxRedCards = Math.max(redCards1, redCards2);

    // btw, didnt told you but the enum here:
    // 1=pre game
    // 2=live game
    // 3=post game

    if(type === "gamecenter" && status.enum === 1){
        return (
            <div className={styles.span}>
                <PreGameGC 
                    statusName={status?.name}
                    startTime={startTime}
                    description={description}
                />
            </div>
        ) 
    } 

    if (!scores || scores.length < 2 || status.enum === 1) {
        return <div style={colorStyle} className={styles.span}>-</div>;
    }

    return (
        <div className={`${styles.span} ${type === "gamecenter" && "span-game-center"}`}>
            {
                status?.enum === 3  && type === "gamecenter" &&
                    <div  className={styles.startTime}>
                        {formatDateString(startTime)}
                    </div>
            }

            <div style={{marginBottom: type === "gamecenter" ? "8px" : "4px"}} className={styles.block}>
                <div className={styles.number}>
                    <div
                        style={getGridStyle(maxRedCards)}
                        className={`${styles.gol} ${styles.marginR}`}
                    >
                        {RenderGoals(redCards1, maxRedCards)}
                    </div>
                    {penalties && penalties.length > 0 && penalties[0] !== undefined && (
                        <span className={styles.score}>({penalties[0]})</span>
                    )}
                    <span style={type === "gamecenter" ? colorStyleGameCenter : colorStyle}  className={styles.scores}>
                        {scores[0]}
                    </span>
                </div>
                <div style={colorStyle} className={styles.tire}>
                    {
                        type === "gamecenter" && status.enum === 2 ? <>{ gameTime }</> : "-"
                    }
                </div>
                <div className={styles.number}>
                    <span style={type === "gamecenter" ? colorStyleGameCenter : colorStyle} className={styles.scores}>
                        {scores[1]}
                    </span>
                    {penalties && penalties.length > 1 && penalties[1] !== undefined && (
                        <span className={styles.score}>({penalties[1]})</span>
                    )}
                    <div
                        style={getGridStyle(maxRedCards)}
                        className={`${styles.gol} ${styles.marginL}`}
                    >
                        {RenderGoals(redCards2, maxRedCards)}
                    </div>
                </div>
            </div>
            {description && <div style={{marginBottom: type === "gamecenter" ? "8px" : "4px"}} className={styles.description}>{description}</div>}
            
            {type === "gamecenter" && status?.name && <div className={styles.statusName}>{status?.name}</div>}
        </div>
    );
    
    
};

const RenderGoals = (count: number, maxCount: number) => {
    return Array.from({ length: maxCount }).map((_, index) => (
        <span
            key={index}
            className={`${styles.ball} ${index < count ? styles.visible : styles.hidden}`}
        ></span>
    ));
};




const arePropsEqual = (
    prevProps: EventResultProps,
    nextProps: EventResultProps
): boolean => {
    const scoresEqual = (prevProps.scores || []).every(
        (score, index) => score === (nextProps.scores || [])[index]
    );
    const penaltiesEqual = (prevProps.penalties || []).every(
        (penalty, index) => penalty === (nextProps.penalties || [])[index]
    );

    return (
        scoresEqual &&
        penaltiesEqual &&
        prevProps.redCards1 === nextProps.redCards1 &&
        prevProps.redCards2 === nextProps.redCards2 &&
        prevProps.status.enum === nextProps.status.enum &&
        prevProps.description === nextProps.description &&
        prevProps.soundLocal === nextProps.soundLocal && // добавляем сравнение soundLocal
        prevProps.type === nextProps.type // добавляем сравнение soundLocal
    );
};

export default React.memo(EventResult, arePropsEqual);
