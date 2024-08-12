
import React from "react";

import { MainOdds } from "@/types/home";

import "./cof.scss";


const EventCof = ({ options }: MainOdds) => {

    return (
        <div className="match-block__cof cof-team">
            {options.map((option, index) => (
                <span key={index}>
                    {option.name}. {option.value.toFixed(1)}
                    {GetTrendIcon(option.trend)}
                </span>
            ))}
        </div>
    );
};

const GetTrendIcon = (trend: number) => {
    if (trend === 0) {
        return null;
    }

    return trend === 1 ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.45841 1.31167C4.51323 1.21657 4.59215 1.13759 4.6872 1.08267C4.78225 1.02775 4.89009 0.99884 4.99986 0.99884C5.10964 0.99884 5.21748 1.02775 5.31253 1.08267C5.40758 1.13759 5.48649 1.21657 5.54132 1.31167L9.13882 7.54251C9.19368 7.63752 9.22256 7.74529 9.22256 7.855C9.22256 7.96471 9.19368 8.07249 9.13883 8.1675C9.08397 8.26251 9.00508 8.34141 8.91007 8.39627C8.81506 8.45112 8.70728 8.48 8.59757 8.48001H1.40257C1.29286 8.48 1.18509 8.45112 1.09008 8.39627C0.995068 8.34141 0.916171 8.26251 0.861318 8.1675C0.806465 8.07249 0.777587 7.96471 0.777588 7.855C0.777589 7.74529 0.806467 7.63752 0.861322 7.54251L4.45882 1.31167H4.45841Z" fill="#018000"/>
        </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.45841 8.16715C4.51323 8.26225 4.59215 8.34123 4.6872 8.39615C4.78225 8.45107 4.89009 8.47998 4.99986 8.47998C5.10964 8.47998 5.21748 8.45107 5.31253 8.39615C5.40758 8.34123 5.48649 8.26225 5.54132 8.16715L9.13882 1.93631C9.19368 1.8413 9.22256 1.73353 9.22256 1.62382C9.22256 1.51411 9.19368 1.40633 9.13883 1.31132C9.08397 1.21631 9.00508 1.13741 8.91007 1.08255C8.81506 1.0277 8.70728 0.998817 8.59757 0.998814H1.40257C1.29286 0.998817 1.18509 1.0277 1.09008 1.08255C0.995068 1.13741 0.916171 1.21631 0.861318 1.31132C0.806465 1.40633 0.777587 1.51411 0.777588 1.62382C0.777589 1.73353 0.806467 1.8413 0.861322 1.93631L4.45882 8.16715H4.45841Z" fill="#FF4848"/>
        </svg>
    );
}

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
