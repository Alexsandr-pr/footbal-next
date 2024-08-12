"use client"

import ContentBlock from '@/components/content-block/ContentBlock'
import React, { useEffect, useState } from 'react'
import PoleDesctop from '../desctop/Pole'
import { Team } from '@/types/home'
import PoleMobile from '../mobile/Pole'
import { TeamLineups } from '@/types/game-center'

import "./loading-pole.scss"

const PoleBlock = ({ 
    teams,
    teamsLineups
}: {
    teamsLineups: TeamLineups[];
    teams: Team[]; 
}) => {
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
