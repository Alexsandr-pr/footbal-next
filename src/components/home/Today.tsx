"use client";
import { useState, useEffect } from "react";
import Home from "./Home";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store/store";
import { setLiveGamesCount, setLoadingOnLiveGame } from "@/lib/store/filterSlice";
import { Calendar, League } from "@/lib/types/home";
import SoundPlayer from "../ui/SoundPlayer";


const Today = ({
    leagues,
    calendar,
} : {
    leagues: League[];
    calendar: Calendar | null;
}) => {
    const dispatch = useDispatch();
    const showLiveGames = useSelector((state: RootState) => state.filter.showLiveGames);
    const [filteredLeagues, setFilteredLeagues] = useState<League[]>([]);

    useEffect(() => {
        dispatch(setLoadingOnLiveGame());

        const liveLeagues = leagues.map(league => ({
            ...league,
            games: league.games.filter(game => game.status.enum === 2)
        })).filter(league => league.games.length > 0);

        const liveGamesCount = liveLeagues.reduce(
            (count, league) => count + league.games.length, 0
        );

        if (showLiveGames) {
            setFilteredLeagues(liveLeagues);
            dispatch(setLiveGamesCount(liveGamesCount));
        } else {
            setFilteredLeagues(leagues);
            dispatch(setLiveGamesCount(liveGamesCount)); 
        }

    }, [showLiveGames, leagues, dispatch]);

    return (
        <>
            <Home calendar={calendar} leagues={filteredLeagues} />
            <SoundPlayer/>
        </>
    )
}

export default Today;
