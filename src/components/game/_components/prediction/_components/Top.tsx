
import ImageWithCheck from '@/components/ui/ImageWithCheck';
import Loading from '@/components/ui/loading/Loading';
import { _SERVER_API } from '@/lib/config/consts'
import { Prediction } from '@/lib/types/game-center'
import React from 'react'

const Top = ({
    prediction,
    isLoading
}: {
    prediction?:Prediction;
    isLoading: boolean;
}) => {
    return (
        <div className={`content-block__header ${prediction?.cta_link && prediction?.bookie_id ? "content-block__header-prediction" : ""}`}>
            <p>PRONÓSTICOS PREVIOS AL PARTIDO</p>
            {
                isLoading ? <Loading clazz="loading-prediction-bookie" size={16}/> : <>
                    {
                        (prediction?.cta_link && prediction?.bookie_id) &&    <a className="static-game__block-link" target="_blank" href={prediction?.cta_link}>
                                                                                <ImageWithCheck
                                                                                    src={`${_SERVER_API}/images/bookies/${prediction?.bookie_id}`} 
                                                                                    width={70} 
                                                                                    height={32} 
                                                                                    alt="bookies" 
                                                                                />
                                                                            </a>
                    }
                </>
            }
        </div>
    )
}

export default Top