"use client";
import React, { useEffect, useRef } from "react";
import { getGridStyle } from "@/lib/utils";
import styles from "./result.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface EventResultProps {
    scores?: number[];
    status: {
        enum: number;
    };
    redCards1: number;
    redCards2: number;
    penalties?: [number, number] | [];
    description?: string;
    soundLocal: boolean;
}

const EventResult = ({
    redCards2,
    redCards1,
    scores,
    status,
    penalties,
    description,
    soundLocal,
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

    const colorStyle = { color: status.enum === 2 ? "var(--live)" : "var(--white)" };

    if (!scores || scores.length < 2 || status.enum === 1) {
        return <div style={colorStyle} className={styles.span}>-</div>;
    }

    const maxRedCards = Math.max(redCards1, redCards2);
    const maxPenalties = penalties ? Math.max(penalties[0] || 0, penalties[1] || 0) : 0;

    return (
        <div className={styles.span}>
            <div className={styles.block}>
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
                    <span style={colorStyle} className={styles.scores}>
                        {scores[0]}
                    </span>
                </div>

                <div style={colorStyle} className={styles.tire}>
                    -
                </div>

                <div className={styles.number}>
                    <span style={colorStyle} className={styles.scores}>
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

            {description && <div className={styles.description}>{description}</div>}
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
        prevProps.soundLocal === nextProps.soundLocal // добавляем сравнение soundLocal
    );
};

export default React.memo(EventResult, arePropsEqual);
