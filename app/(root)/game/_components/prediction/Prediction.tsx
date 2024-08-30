"use client";
import { useState, useEffect } from "react";
import WhiteButton from "@/components/ui/buttons/button-white/WhiteButton";
import { PredictionBlockProps } from "@/types/game-center";
import Link from "next/link";
import Image from "next/image";
import { _SERVER_API } from "@/config/consts";
import "./prediction.scss";
import Odds from "@/components/odds/Odds";
import Loading from "@/components/ui/loading/Loading";

const PredictionBlock = ({
    prediction,
    id,
    status
} : PredictionBlockProps) => {

    const [hasVoted, setHasVoted] = useState(false);
    const [state, setState] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

    useEffect(() => {
        const fetchData = () => {
            const votedGames = JSON.parse(localStorage.getItem("votedGames") || "[]");
            if (votedGames.includes(id) || status?.enum !== 1) {
                setState(true); 
                setHasVoted(true);
            }
            setIsLoading(false); // Остановка загрузки после получения данных
        };
        fetchData();
    }, [id, status?.enum]);

    const handleVote = async (vote_url: string) => {
        try {
            const response = await fetch(vote_url, {
                method: 'GET',
            });
            if (response.ok) {
                setState(true);
                setHasVoted(true);
                const votedGames = JSON.parse(localStorage.getItem("votedGames") || "[]");
                votedGames.push(id);
                localStorage.setItem("votedGames", JSON.stringify(votedGames));
            } else {
                console.error("Failed to send vote");
            }
        } catch (error) {
            console.error("Error sending vote:", error);
        }
    };


    return (
        <div className="content-block">
            <div className="content-block__header">
                <p>PRONÓSTICOS PREVIOS AL PARTIDO</p>
                {
                    isLoading ? <Loading clazz="loading-prediction-bookie" size={16}/> : <>
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
                    </>
                }
            </div>
            <div className="content-block__body">
                <div className={`static-game__block ${state ? "_active" : null}`}>
                    <div className="static-game__body">
                        <h2 className="static-game__title">
                            {state ? `Total de voces ${prediction?.total_votes}` : "Quién ganará el partido?"}
                        </h2>
                        {
                            status?.enum === 1 && (
                                <div className="static-game__label">
                                    {state ? "Your voice for 1 was accepted!" : "Seleccione una de las opciones para comprobar su predicción."}
                                </div>
                            )
                        }
                        {
                            (status?.enum === 2 && hasVoted) ? <div className="static-game__label">Your voice for 1 was accepted!</div> : null
                        }
                    </div>
                    {
                        !isLoading ? <>
                        <div  className="static-game__content static-content">
                            <div className="static-content__top static-block">
                                {  
                                    prediction?.options && prediction?.options.map(({name, percentage, vote_url}, index) => (
                                        <div 
                                            key={vote_url} 
                                            style={{width: state ? `${percentage}%` : "auto"}} 
                                            onClick={() => !hasVoted && handleVote(vote_url)} 
                                            className="static-block__item"
                                        >
                                            <span>{name}</span>
                                            <span className={`${index === 0 && "static-block__item-span"}`}>
                                                {index === 0 ? <Image width={8.5} height={8.5} src="/assets/icons/check.svg" alt="Check" /> : null}
                                                <p>{percentage.toFixed(1)}%</p>
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="static-content__bottom">
                                {prediction?.odds && <Odds odds={prediction?.odds}/>}
                            </div>
                        </div>
                        </> : <div className="prediction-content-loading">
                            <Loading size={16}/>
                        </div>
                    }
                    <WhiteButton 
                        clazz={"bottom-info__button"} 
                        text="Apostar ahora" 
                        cb={state ? () => {} : () => setState(false)} 
                    />
                </div>
            </div>
        </div>
    );
}

export default PredictionBlock;
