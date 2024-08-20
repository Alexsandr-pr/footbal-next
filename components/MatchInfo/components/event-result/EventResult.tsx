"use client";
import React from "react";
import { EventResultProps } from "@/types/props/match";
import Parent from "./_components/ui/parent/Parent";
import ResultHome from "./_components/home/ResultHome";
import ResultGameCenter from "./_components/gc/ResultGameCenter";

const EventResult = (props: EventResultProps) => { 
    const {type, status, scores} = props;

    if(type === "gamecenter" ){
        return (
            <ResultGameCenter
                {...props}
            />
        )
    } 

    if (!scores || scores.length < 2 || status.enum === 1) {
        return <Parent type="home"><div style={{color: status.enum === 2 ? "var(--live)" : "var(--white)"}}>-</div></Parent>;
    }

    return (
        <ResultHome 
            {...props}
        />
    );
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
        prevProps.soundLocal === nextProps.soundLocal && 
        prevProps.type === nextProps.type 
    );
};

export default React.memo(EventResult, arePropsEqual);
