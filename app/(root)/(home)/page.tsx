"use client";

import { useState, useEffect, useRef } from "react";
import { LeaguesResponse } from "@/types/response";
import { Calendar, League } from "@/types/home";
import Today from "./_components/home/Today";

export default function Page() {
    
    const [leagues, setLeagues] = useState<League[]>([]);
    const [calendar, setCalendar] = useState<Calendar | null>(null);
    const [ttl, setTTL] = useState<number>(10);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/today');
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

    return <Today calendar={calendar} leagues={leagues} />;
}