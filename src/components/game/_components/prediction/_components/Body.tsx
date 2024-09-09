import { Status } from '@/lib/types'
import { Prediction } from '@/lib/types/game-center';
import React from 'react'

const Body = ({
    status,
    state,
    prediction,
    hasVoted
} : {
    status?:Status;
    state:boolean;
    hasVoted:boolean;
    prediction?:Prediction;
}) => {
    return (
        <div className="static-game__body-text">
            <h2 className="static-game__title">
                {state ? `Total de voces ${prediction?.total_votes}` : "Quién ganará el partido?"}
            </h2>
            {
                status?.enum === 1 && (
                    <div className="static-game__label">
                        {state ? "Your vote was accepted!" : "Seleccione una de las opciones para comprobar su predicción."}
                    </div>
                )
            }
            {
                (status?.enum === 2 && hasVoted) ? <div className="static-game__label">Your vote was accepted!</div> : null
            }
        </div>
    )
}

export default Body