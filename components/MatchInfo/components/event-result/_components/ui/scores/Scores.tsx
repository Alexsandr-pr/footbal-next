import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import "./scores.scss";

const Scores = ({
    scores,
    statusEnum,
    soundLocal,
    type
} : {
    scores: number;
    statusEnum?: number;
    soundLocal?: boolean;
    type?: "gc";
}) => {
    const previousScoresRef = useRef<number | null>(null);
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
        if (previousScoresRef.current !== null && scores !== previousScoresRef.current) {
            if (audioRef.current && sound && soundLocal) {
                audioRef.current.play();
            }
        }
        previousScoresRef.current = scores;
    }, [scores, sound, soundLocal]);

    const colorStyle = { 
        color: statusEnum === 2 ? "var(--live)" : "var(--white)", 
    };

    return (
        <span style={colorStyle} className={`scores-event-result ${type === "gc" ? "size-24" : ""}`}>
            {scores}
        </span>
    );
}

export default Scores;
