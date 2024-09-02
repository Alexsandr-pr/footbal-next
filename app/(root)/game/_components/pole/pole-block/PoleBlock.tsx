"use client"
import ContentBlock from '@/components/content-block/ContentBlock'
import React, { useEffect, useState } from 'react'
import PoleDesctop from '../desctop/Pole'
import PoleMobile from '../mobile/Pole'
import { PoleProps } from '@/types/game-center';
import Loading from '@/components/ui/loading/Loading'
import { useRouter } from 'next/navigation'
import { useSelector } from "react-redux";
import "./loading-pole.scss"
import { RootState } from '@/store/store'


const PoleBlock = ({ 
    teamsLineups,
    cb,
    activeTab,
    params,
    showCountryFlags
}: PoleProps) => {
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(true);
    const { game } = useSelector((state:RootState) => state.gameCenter);

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
            size='average'
            cb={() => pushLineups(params?.id)}
            buttonText={(activeTab === "first") ? "see full lineup" : ""}
            title={"LINEUPs"} 
        >
            {loading ? (
                <Loading size={32} clazz='loading-pole'/>
            ) : isMobile ? (
                <>
                {
                        game?.teams && <PoleMobile showCountryFlags={showCountryFlags} teamsLineups={teamsLineups} teams={game.teams}/>
                }
                </>
            ) : (
                <>
                {
                        game?.teams && <PoleDesctop showCountryFlags={showCountryFlags} teamsLineups={teamsLineups} teams={game.teams} />
                }
                </>
                
            )}
        </ContentBlock>
    );
}

export default PoleBlock;
