"use client"

import "./breadcrumbs.scss";

const Breadcrumbs = ({
    commandFirst, 
    commandSecond,
    leagueName
} : {
    commandFirst: string; 
    commandSecond: string;
    leagueName:string
}) => {
    
    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs__item">
                {leagueName}
            </div>
            <div className="breadcrumbs__item">
                {commandFirst} vs. {commandSecond} 
            </div>
        </div>
    )
}

export default Breadcrumbs