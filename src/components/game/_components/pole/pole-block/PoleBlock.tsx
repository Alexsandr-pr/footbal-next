"use client"

import React, { useEffect, useState } from 'react'
import PoleDesctop from '../desctop/Pole'
import PoleMobile from '../mobile/Pole'
import { PoleProps } from '@/lib/types/game-center';
import Loading from '@/components/ui/loading/Loading'
import { useRouter } from 'next/navigation'
import { useSelector } from "react-redux";
import styles from  "./loading-pole.module.scss"
import { RootState } from '@/lib/store/store'
import ContentBlock from '@/components/ui/content-block/ContentBlock';


const PoleBlock = ({ 
    teamsLineups,
    cb,
    activeTab,
    id,
    showCountryFlags
}: PoleProps) => {
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(true);
    const data = useSelector((state:RootState) => state.gameCenter.data);
    const game = data?.game;
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
            cb={() => pushLineups(id)}
            buttonText={(activeTab === "first") ? "see full lineup" : ""}
            title={"LINEUPs"} 
        >
            {loading ? (
                <Loading size={32} clazz={styles.loading}/>
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
