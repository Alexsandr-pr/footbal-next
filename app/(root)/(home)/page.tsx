"use client";
import { useState, useEffect } from 'react';
import Home from "./_components/home/Home";
import { League, LeaguesResponse } from '@/types/home';
import { useFilter } from '@/contexts/FilterContext';

async function getData(): Promise<LeaguesResponse> {
    const res = await fetch('https://www.sports-stats.net/games/today', { cache: 'no-store' });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default function Page() {
    const { showLiveGames, setLiveGamesCount } = useFilter();
    const [leagues, setLeagues] = useState<League[]>([]);
    const [filteredLeagues, setFilteredLeagues] = useState<League[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { leagues } = await getData();
                setLeagues(leagues);
                setFilteredLeagues(leagues);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const countLiveGames = (leagues: League[]) => 
            leagues.reduce((count, league) => count + league.games.filter(game => game.status.enum === 2).length, 0);

        if (showLiveGames) {
            const filtered = leagues.map(league => ({
                ...league,
                games: league.games.filter(game => game.status.enum === 2) // Живые игры
            })).filter(league => league.games.length > 0); // Исключение пустых лиг

            setLiveGamesCount(countLiveGames(filtered));
            setFilteredLeagues(filtered);
        } else {
            setLiveGamesCount(countLiveGames(leagues));
            setFilteredLeagues(leagues);
        }
    }, [showLiveGames, leagues, setLiveGamesCount]);

    return <Home leagues={filteredLeagues} />;
}