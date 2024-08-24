"use client";
import { useState } from "react";
import WhiteButton from "@/components/ui/buttons/button-white/WhiteButton";
import { Prediction } from "@/types/game-center";
import GetTrendIcon from "@/components/ui/trend-icon/GetTrendIcon";
import Link from "next/link";
import Image from "next/image";
import { _SERVER_API } from "@/config/consts";
import "./prediction.scss";

const PredictionBlock = ({
    prediction
} : {
    prediction?: Prediction;
}) => {

    const [state, setState] = useState(false);

    const handleVote = async (vote_url: string) => {
        try {
            const response = await fetch(vote_url, {
                method: 'GET',
            });
            if (response.ok) {
                setState(true);
            } else {
                console.error("Failed to send vote");
            }
        } catch (error) {
            console.error("Error sending vote:", error);
        }
    };
    
    return (
        <div  className="content-block">
            <div className="content-block__header">
                <p>PRONÓSTICOS PREVIOS AL PARTIDO</p>
                {
                    prediction?.cta_link && <Link className="static-game__block-link" target="_blank" href={prediction?.cta_link}>
                        <Image
                            src={`${_SERVER_API}/images/bookies/${prediction?.bookie_id}`}
                            width={70} 
                            height={32}
                            alt="bookies"
                        />
                    </Link>
                }
                
            </div>
            <div className="content-block__body">
                <div className={`static-game__block ${state ? "_active" : null}`}>
                    <div className="static-game__body">
                        <h2 className="static-game__title">
                            {state ? "Total de voces 2000" : "Quién ganará el partido?"}
                        </h2>
                        <div className="static-game__label">
                            {state ? "Your voice for 1 was accepted!" : "Seleccione una de las opciones para comprobar su predicción."}
                        </div>
                    </div>
                    <div className="static-game__content static-content">
                        <div className="static-content__top static-block">
                            {  
                                prediction?.options && prediction?.options.map(({name, percentage, vote_url}, index) => (
                                    <div 
                                        key={vote_url} 
                                        style={{width: state ? `${percentage}%` : "auto"}} 
                                        onClick={() => handleVote(vote_url)} 
                                        className="static-block__item"
                                    >
                                        <span>{name}</span>
                                        <span className={`${index === 0 && "static-block__item-span"}`}>
                                            {index === 0 ? <img src="/assets/icons/check.svg" alt="" /> : null}
                                            <p>{percentage.toFixed(1)}%</p>
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="static-content__bottom">
                            {
                                prediction?.odds && prediction?.odds.map(({name, trend, value}) => (
                                    <div key={value + trend + name} className="static-content__item">
                                        {name}. {value.toFixed(1)}
                                        <GetTrendIcon trend={trend}/>
                                    </div>
                                ))
                            } 
                        </div>
                    </div>
                    <WhiteButton clazz={"bottom-info__button"} text="Apostar ahora" cb={() => setState(false)} />
                </div>
            </div>
        </div>
    );
}

export default PredictionBlock;
