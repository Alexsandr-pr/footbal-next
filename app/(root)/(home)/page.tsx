"use client";

import { useState, useEffect, useRef } from "react";
import { _SERVER_API } from "@/config/consts";
import { LeaguesResponse } from "@/types/response";
import { Calendar, League } from "@/types/home";
import Today from "./_components/home/Today";

const minimumTTL = 10; // Минимальный интервал обновления в секундах

async function getData(): Promise<LeaguesResponse> {
    const res = await fetch(`${_SERVER_API}/games/today`, {
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

    // Функция для получения данных
    const fetchData = async () => {
        try {
            const { leagues, calendar, ttl } = await getData();
            setLeagues(leagues);
            setCalendar(calendar);
            setTTL(ttl);  // Обновляем TTL после получения данных
            console.log(`Data fetched at: ${new Date().toLocaleTimeString()}`); // Вывод времени запроса
        } catch (error) {
            console.error(error);
        }
    };

    // Эффект для первоначального получения данных
    useEffect(() => {
        fetchData();
    }, []);

    // Эффект для управления интервалом обновления данных на основе TTL
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

    return <Today calendar={calendar} leagues={leagues} />;
}
