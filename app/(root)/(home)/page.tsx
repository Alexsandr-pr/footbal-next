"use client";

import { useState, useEffect, useRef } from "react";
import Home from "./_components/home/Home";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setLiveGamesCount, setLoadingOnLiveGame } from "@/store/filterSlice";
import { LeaguesResponse } from "@/types/response";
import { Calendar, League } from "@/types/home";

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
                const res = await fetch('/api/revalidate');
                if (!res.ok) throw new Error('Failed to fetch data');

                const data: LeaguesResponse = await res.json();
                setLeagues(data.leagues);
                setCalendar(data.calendar);
                setFilteredLeagues(data.leagues);
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

    useEffect(() => {
        dispatch(setLoadingOnLiveGame());
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