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
        <ul className="breadcrumbs">
            <li className="breadcrumbs__item breadcrumbs__item-first">
                {leagueName}
            </li>
            <li className="breadcrumbs__item">
                {commandFirst} vs. {commandSecond} 
            </li>
        </ul>
    )
}

export default Breadcrumbs