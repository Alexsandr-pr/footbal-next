"use client"
import { _SERVER_API } from "@/lib/config/consts";
import useSWR from 'swr';
import { LeaguesResponse } from "@/lib/types/response";
import Home from "./Home";



function ClientRefreshPages({ initialData, path } : {
    initialData: LeaguesResponse;
    path:string;
}) {
    
    const fetcher = (url: string) => fetch(url).then(res => res.json());
    console.log(initialData.TTL)
    const { data, mutate } = useSWR(`${_SERVER_API}/games/${path}`, fetcher, {
        fallbackData: initialData,
        refreshInterval: initialData.TTL * 1000,
    });


    return (
        <Home calendar={data?.calendar} leagues={data?.leagues} />
    );
}

export default ClientRefreshPages;