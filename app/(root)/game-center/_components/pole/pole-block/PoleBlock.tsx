"use client"

import ContentBlock from '@/components/content-block/ContentBlock'
import React, { useEffect, useState } from 'react'
import PoleDesctop from '../desctop/Pole'

import PoleMobile from '../mobile/Pole'


import "./loading-pole.scss"
import { PoleProps } from '@/types/game-center';

const PoleBlock = ({ 
    teams,
    teamsLineups
}: PoleProps) => {
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991.98);
            setLoading(false);  // Убираем загрузку после определения размера окна
        };
        
        handleResize(); // Инициализация при монтировании
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    
    return (
        <ContentBlock buttonText="see full lineup" title="LINEUPs" >
            {loading ? (
                <div className='loading-pole'>Loading...</div>  
            ) : isMobile ? (
                <PoleMobile teamsLineups={teamsLineups} teams={teams}/>
            ) : (
                <PoleDesctop teamsLineups={teamsLineups} teams={teams} />
            )}
        </ContentBlock>
    );
}

export default PoleBlock;
