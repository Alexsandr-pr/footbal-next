import React from 'react'

const Title = ({
    name, 
    scores
} : {
    name?:string;
    scores?: [number, number];
}) => {
    return (
        <div key={name} className="calendario-events-title">
            <div className="calendario-events-title-block">{scores && scores[0]}</div>
            <span>{name}</span>
            <div className="calendario-events-title-block">{scores && scores[1]}</div>
        </div>
    )
}

export default Title