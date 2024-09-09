"use client";
import { useState, useEffect } from "react";
import { PredictionBlockProps } from "@/lib/types/game-center";
import { _SERVER_API } from "@/lib/config/consts";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Top from "./_components/Top";
import Body from "./_components/Body";
import Loading from "@/components/ui/loading/Loading";
import Odds from "@/components/ui/odds/Odds";

const PredictionBlock = ({
    prediction,
    id,
    status
} : PredictionBlockProps) => {

    const [hasVoted, setHasVoted] = useState(false);
    const [state, setState] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            const votedGames = JSON.parse(localStorage.getItem("votedGames") || "[]");
            if (votedGames.includes(id)) {
                setState(true); 
                setHasVoted(true);
            }
            setIsLoading(false); 
        };
        fetchData();
    }, [id, status?.enum]);

    const handleVote = async (vote_url: string) => {

        if(status?.enum === 2 || status?.enum === 3) {
            return null
        }
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

    const [block] = useAutoAnimate();
    return (
        <div className="content-block">
            <Top isLoading={isLoading} prediction={prediction}/>
            <div className="content-block__body-prediction">
                <div  className={`static-game__block`}>
                    {
                        !isLoading ?
                        <>
                            <Body state={state} hasVoted={hasVoted} status={status} prediction={prediction}/>
                            <div ref={block} className={`prediction-state-false ${((state && hasVoted) || status?.enum === 2 || status?.enum === 3) ? "active" : null}`}>
                                {  
                                    prediction?.options && prediction?.options.map(({name, percentage, vote_url}, index) => (
                                        <div 
                                            key={vote_url} 
                                            style={{ width: ((state && hasVoted) || status?.enum === 2 || status?.enum === 3) ? `calc(${percentage}%)` : "auto"}} 
                                            onClick={() => !hasVoted && handleVote(vote_url)} 
                                            className="prediction-state-false__item"
                                        >
                                            <span className="prediction-state-false__item-1">{name}</span>
                                            <span className="prediction-state-false__item-2">{percentage.toFixed(0)}%</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </> : <Loading size={24} clazz="loading-prediction"/>
                    }
                    {
                        prediction?.odds && <div className="static-content__odds">
                                                <Odds odds={prediction?.odds}/>
                                            </div>
                    }
                </div>
                {
                        (prediction?.cta_link && (state && hasVoted || status?.enum !== 1)) &&  <a target="_blank" href={prediction?.cta_link} className="static-info__button white-button">
                                                    Apostar ahora
                                                </a>
                    }
            </div>
        </div>
    );
}

export default PredictionBlock;
