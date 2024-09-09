
import React from 'react'

import styles from  "./odds.module.scss";
import GetTrendIcon from '../trend-icon/GetTrendIcon';

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
                    <div key={value + trend + name} className={styles.item}>
                        {name}. {value.toFixed(1)}
                        <GetTrendIcon trend={trend}/>
                    </div>
                ))
            } 
        </>
    )
}

export default Odds