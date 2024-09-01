"use client";

import { useState, useEffect, useRef } from "react";
import { _SERVER_API } from "@/config/consts";
import { LeaguesResponse } from "@/types/response";
import { Calendar, League } from "@/types/home";
import Home from "../_components/home/Home";

const minimumTTL = 10;

async function getData(): Promise<LeaguesResponse> {
    const res = await fetch(`${_SERVER_API}/games/tomorrow`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    const ttl = data.TTL || minimumTTL; 

    return { leagues: data.leagues, calendar: data.calendar, ttl };
}

export default function Page() {
    const [leagues, setLeagues] = useState<League[]>([]);
    const [calendar, setCalendar] = useState<Calendar | null>(null);
    const [ttl, setTTL] = useState<number>(minimumTTL);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const fetchData = async () => {
        try {
            const { leagues, calendar, ttl } = await getData();
            setLeagues(leagues);
            setCalendar(calendar);
            setTTL(ttl);  
            console.log(`Data fetched at: ${new Date().toLocaleTimeString()}`); 
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(fetchData, Math.max(ttl, minimumTTL) * 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [ttl]);

    return <Home calendar={calendar} leagues={leagues} />;
}
