"use client";

import { useState, useEffect, useRef } from "react";
import Home from "./_components/home/Home";
import { Calendar, League } from "@/types/home";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setLiveGamesCount } from "@/store/filterSlice";

async function getData(): Promise<{
    leagues: League[];
    calendar: Calendar | null;
    ttl: number;
}> {
    const res = await fetch("https://www.sports-stats.net/games/today", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    const ttl = data.ttl || 10; // Default to 10 seconds if TTL is not provided

    return { leagues: data.leagues, calendar: data.calendar, ttl };
}

export default function Page() {
    const dispatch = useDispatch();
    const showLiveGames = useSelector(
        (state: RootState) => state.filter.showLiveGames
    );
    const [leagues, setLeagues] = useState<League[]>([]);
    const [calendar, setCalendar] = useState<Calendar | null>(null);
    const [filteredLeagues, setFilteredLeagues] = useState<League[]>([]);
    const [ttl, setTTL] = useState<number>(10);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const { leagues, calendar, ttl } = await getData();
            setLeagues(leagues);
            setCalendar(calendar);
            setFilteredLeagues(leagues);
            setTTL(ttl);
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

    useEffect(() => {
        const countLiveGames = (leagues: League[]) =>
        leagues.reduce(
            (count, league) =>
            count + league.games.filter((game) => game.status.enum === 2).length,
            0
        );

        if (showLiveGames) {
        const filtered = leagues
            .map((league) => ({
            ...league,
            games: league.games.filter((game) => game.status.enum === 2),
            }))
            .filter((league) => league.games.length > 0);

        dispatch(setLiveGamesCount(countLiveGames(filtered)));
        setFilteredLeagues(filtered);
        } else {
        dispatch(setLiveGamesCount(countLiveGames(leagues)));
        setFilteredLeagues(leagues);
        }
    }, [showLiveGames, leagues, dispatch]);

    return <Home calendar={calendar} leagues={filteredLeagues} />;
}
