
"use client"
import { LeaguesResponse } from '@/types/response';
import Home from '../_components/home/Home';
import { _SERVER_API } from '@/config/consts';
import { useEffect, useRef, useState } from 'react';
import { Calendar, League } from '@/types/home';

function Yesterday() {
    const [leagues, setLeagues] = useState<League[]>([]);
    const [calendar, setCalendar] = useState<Calendar | null>(null);
    const [ttl, setTTL] = useState<number>(10);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/yesterday');
                if (!res.ok) throw new Error('Failed to fetch data');

                const data: LeaguesResponse = await res.json();
                setLeagues(data.leagues);
                setCalendar(data.calendar);
                setTTL(data.ttl);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(fetchData, ttl * 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [ttl]);

    return (
        
        <Home calendar={calendar} leagues={leagues}/>
    );
}

export default Yesterday