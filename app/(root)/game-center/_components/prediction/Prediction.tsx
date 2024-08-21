"use client";
import { useState } from "react";
import WhiteButton from "@/components/ui/buttons/button-white/WhiteButton";
import { Prediction } from "@/types/game-center";
import GetTrendIcon from "@/components/ui/trend-icon/GetTrendIcon";
import Link from "next/link";
import Image from "next/image";
import { _SERVER_API } from "@/config/consts";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import "./prediction.scss";


const PredictionBlock = ({
    prediction
} : {
    prediction: Prediction;
}) => {
    const [state, setState] = useState(false);
    const tabsButtonParams = useSelector((state:RootState) => state.gameCenter.tabsButtonParams);

    if(tabsButtonParams === "second") return null;

    return (
        
        <div className="content-block">
            <div className="content-block__header">
                <p>PRONÓSTICOS PREVIOS AL PARTIDO</p>
                <Link target="_blank" href={prediction.cta_link}>
                    <Image
                        src={`${_SERVER_API}/images/bookies/${prediction.bookie_id}`}
                        width={62} 
                        height={27}
                        alt="bookies"
                    />
                </Link>
            </div>
            <div className="content-block__body">
                <div className={`static-game__block ${state ? "_active" : null}`}>
                    <div className="static-game__body">
                        <h2 className="static-game__title">
                            {
                                state ? "Total de voces 2000" : "Quién ganará el partido?"
                            }
                        </h2>
                        <div className="static-game__label">
                            {
                                state ? "Your voice for 1 was accapted!" : "Seleccione una de las opciones para comprobar su predicción."
                            }
                        </div>
                    </div>
                    <div className="static-game__content static-content">
                        <div className="static-content__top static-block ">
                            {  
                                prediction.options.map(({name, percentage, vote_url}) => {
                                    return (
                                        <div key={vote_url} style={{width: state ? `${percentage}%` : "auto"}} onClick={() => setState(true)} className="static-block__item">
                                            <span>{name}</span>
                                            <span>{percentage.toFixed(1)}%</span>
                                        </div>
                                    )
                                }) 
                            }
                        </div>
                        <div className="static-content__bottom">
                            {
                                prediction.odds.map(({name, trend, value}) => {
                                    return (
                                        <div key={value + trend + name} className="static-content__item">
                                            {name}. {value.toFixed(1)}
                                            <GetTrendIcon trend={trend}/>
                                        </div>
                                    )
                                })
                            } 
                        </div>
                    </div>
                    <WhiteButton clazz={"bottom-info__button"} text="Apostar ahora" cb={() => setState(false)}/>
                </div>
            </div>
        </div>
        
        
    )
}

export default PredictionBlock