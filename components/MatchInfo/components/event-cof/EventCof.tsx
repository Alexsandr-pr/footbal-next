
import React from "react";



import "./cof.scss";
import { MainOdds } from "@/types";
import GetTrendIcon from "@/components/ui/trend-icon/GetTrendIcon";

const EventCof = ({ options }: MainOdds) => {

    return (
        <div className="match-block__cof cof-team">
            {options.map((option, index) => (
                <span key={index}>
                    {option.name}. {option.value.toFixed(1)}
                    <GetTrendIcon trend={option.trend}/>
                </span>
            ))}
        </div>
    );
};



const arePropsEqual = (prevProps: MainOdds, nextProps: MainOdds) => {
    
    if (prevProps.options.length !== nextProps.options.length) {
        return false;
    }

    return prevProps.options.every((prevOption, index) => {
        const nextOption = nextProps.options[index];
        return (
            prevOption.name === nextOption.name &&
            prevOption.value === nextOption.value &&
            prevOption.trend === nextOption.trend
        );
    });
}

export default React.memo(EventCof, arePropsEqual);
