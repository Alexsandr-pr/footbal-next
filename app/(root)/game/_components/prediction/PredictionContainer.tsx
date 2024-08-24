"use client";

import { LiveOdds, Prediction, Team } from "@/types/game-center";
import PredictionBlock from "./Prediction";
import { usePathname } from "next/navigation";
import LiveOddsBlock from "../live-odds/LiveOdds";

const PredictionContainer = ({
    prediction,
    id,
    showCountryFlags,
    teams,
    liveOdds
}:{
    id:string;
    prediction?:Prediction;
    showCountryFlags?:boolean;
    teams:Team[];
    liveOdds?: LiveOdds;
}) => {

    const pathname = usePathname();
    if(pathname === `/game/${id}`) {
        return (
            <>
                <PredictionBlock prediction={prediction}/>
                <LiveOddsBlock liveOdds={liveOdds} teams={teams} showCountryFlags={showCountryFlags}/>
            </>
        )

    } else {
        return null
    }
}

export default PredictionContainer