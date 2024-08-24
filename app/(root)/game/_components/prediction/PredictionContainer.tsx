"use client";

import { Prediction } from "@/types/game-center";
import PredictionBlock from "./Prediction";
import { usePathname } from "next/navigation";

const PredictionContainer = ({
    prediction,
    id
}:{
    id:string;
    prediction?:Prediction;
}) => {

    const pathname = usePathname();
    if(pathname === `/game/${id}`) {
        return (
            <PredictionBlock prediction={prediction}/>
        )
    } else {
        return null
    }
}

export default PredictionContainer