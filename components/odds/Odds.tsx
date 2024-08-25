
import React from 'react'
import GetTrendIcon from '../ui/trend-icon/GetTrendIcon';
import "./odds.scss";

const Odds = ({
    odds
} : {
    odds?:{
        name:string;
        value:number;
        trend:number;
    }[];
}) => {
    return (
        <>
            {
                odds && odds.map(({name, trend, value}) => (
                    <div key={value + trend + name} className="static-content__item">
                        {name}. {value.toFixed(1)}
                        <GetTrendIcon trend={trend}/>
                    </div>
                ))
            } 
        </>
    )
}

export default Odds