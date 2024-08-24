"use client"

import ContentBlock from '@/components/content-block/ContentBlock'
import React, { useEffect, useState } from 'react'
import PoleDesctop from '../desctop/Pole'

import PoleMobile from '../mobile/Pole'

import "./loading-pole.scss"
import { PoleProps } from '@/types/game-center';
import Loading from '@/components/ui/loading/Loading'
import { useRouter } from 'next/navigation'

const PoleBlock = ({ 
    teams,
    teamsLineups,
    cb,
    activeTab,
    params
}: PoleProps) => {
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991.98);
            setLoading(false); 
        };
        
        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const router = useRouter();

    const pushLineups = (id?:string) => {
        router.push(`/game/${id}/lineups`)
    }
    
    return (
        <ContentBlock
            cb={() => pushLineups(params?.id)}
            buttonText={activeTab === "first" ? "see full lineup" : ""}
            title="LINEUPs" 
        >
            {loading ? (
                <Loading size={32} clazz='loading-pole'/>
            ) : isMobile ? (
                <PoleMobile teamsLineups={teamsLineups} teams={teams}/>
            ) : (
                <PoleDesctop  teamsLineups={teamsLineups} teams={teams} />
            )}
        </ContentBlock>
    );
}

export default PoleBlock;
