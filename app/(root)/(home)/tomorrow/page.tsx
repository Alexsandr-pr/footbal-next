"use client";

import useSWR from "swr";
import { LeaguesResponse } from "@/types/response";
import { Calendar, League } from "@/types/home";

import { _SERVER_API } from "@/config/consts";
import { useEffect, useState } from "react";
import Home from "../_components/home/Home";


const fetcher = async (url: string): Promise<LeaguesResponse> => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
};

export default function Tomorrow() {
    const [dedupingInterval, setDedupingInterval] = useState(10000); 

    const { data, error } = useSWR<LeaguesResponse>(`${_SERVER_API}/games/tomorrow`, fetcher, {
        refreshInterval: dedupingInterval, 
    });

    useEffect(() => {
        if (data) {
            setDedupingInterval(data.ttl * 1000); 
        }
    }, [data]);

    if (error) return <div>Failed to load data</div>;
    if (!data) return <div>Loading...</div>;

    const leagues: League[] = data.leagues;
    const calendar: Calendar | null = data.calendar;

    return <Home calendar={calendar} leagues={leagues} />;
}