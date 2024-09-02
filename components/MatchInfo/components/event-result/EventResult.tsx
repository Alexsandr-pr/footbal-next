"use client";
import React, { useEffect, useRef } from "react";
import { EventResultProps } from "@/types/props/match";
import Parent from "./_components/ui/parent/Parent";
import ResultHome from "./_components/home/ResultHome";
import ResultGameCenter from "./_components/gc/ResultGameCenter";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import SoundPlayer from "./_components/SoundPlayer"; 

const EventResult = (props: EventResultProps) => { 
    const { type, status, scores, soundLocal } = props;

    const previousScoresRef = useRef<number[]>(scores || []);

    const sound = useSelector((state: RootState) => state.filter.sound);

    const shouldPlaySound = () => {
        if (scores && previousScoresRef.current) {
            return scores.some(
                (score, index) => score !== previousScoresRef.current[index]
            );
        }
        return false;
    };

    useEffect(() => {
        previousScoresRef.current = scores || [];
    }, [scores]);

    if (type === "gamecenter") {
        return (
            <ResultGameCenter {...props} />
        );
    } 

    if (scores === undefined || scores.length < 2 || status.enum === 1) {
        return <Parent type="home"><div style={{color: status.enum === 2 ? "var(--live)" : "var(--white)"}}>-</div></Parent>;
    }

    return (
        <>
            <ResultHome {...props} />
            <SoundPlayer play={shouldPlaySound() && sound && soundLocal || false} />
        </>
    );
};

export default EventResult;
