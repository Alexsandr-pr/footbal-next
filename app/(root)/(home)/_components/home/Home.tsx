"use client";

import MatchInfo from '@/components/MatchInfo/MatchInfo';
import CalendarioBottom from '../bottom/CalendarioBottom';
import { Calendar, League } from '@/types/home';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";


const Home = ({
    leagues,
    calendar,
} : {
    leagues: League[];
    calendar: Calendar | null;
}) => {
    const router = useRouter();
    useEffect(() => {
        router.refresh();
    },[])
    return (
        <>
            <div className="flex-12">
                {
                    leagues.map(games => {
                        return <MatchInfo key={games.id} games={games} />
                    })
                }
            </div>
            {calendar && <CalendarioBottom calendar={calendar} />}
        </>
    );
}

export default Home;
