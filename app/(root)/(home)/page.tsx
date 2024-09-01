"use client";

import useSWR from "swr";
import { LeaguesResponse } from "@/types/response";
import { Calendar, League } from "@/types/home";
import Today from "./_components/home/Today";
import { _SERVER_API } from "@/config/consts";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/loading/Loading";


const fetcher = async (url: string): Promise<LeaguesResponse> => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
};

export default function Page() {
    const [dedupingInterval, setDedupingInterval] = useState(5000); 

    const { data, error, mutate } = useSWR<LeaguesResponse>(`${_SERVER_API}/games/today`, fetcher, {
        revalidateOnFocus:true,
        refreshInterval: dedupingInterval, 
    });

    useEffect(() => {
        mutate(); 
    }, [mutate]);

    useEffect(() => {
        if (data) {
            setDedupingInterval(data.ttl * 1000); 
        }
    }, [data]);

    if (error) return <div>Failed to load data</div>;
    if (!data) return <Loading size={32} clazz="loading" />;

    const leagues: League[] = data.leagues;
    const calendar: Calendar | null = data.calendar;

    return <Today calendar={calendar} leagues={leagues} />;
}