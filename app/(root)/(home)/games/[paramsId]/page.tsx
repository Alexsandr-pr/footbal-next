"use client";

import useSWR from "swr";
import { Suspense, useEffect, useState } from "react";
import Home from "../../_components/home/Home";
import { _SERVER_API } from "@/config/consts";
import { LeaguesResponse } from "@/types/response";
import Loading from "@/components/ui/loading/Loading";

const fetcher = async (url: string): Promise<LeaguesResponse> => {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};

interface PageProps {
    params: {
        paramsId: string;
    };
}

const GamePage = ({ params }: PageProps) => {
    const { paramsId } = params;
    const { data, error } = useSWR<LeaguesResponse>(`${_SERVER_API}/games/${paramsId}`, fetcher, {
        revalidateOnFocus: true,
        dedupingInterval: 600000,
    });


    if (error) return <div>Failed to load data</div>;
    if (!data) return <Loading size={32} clazz="loading" />;

    const { leagues, calendar } = data;

    return (
        <Suspense fallback={<Loading size={32} clazz="loading" />}>
            <Home calendar={calendar} leagues={leagues} />
        </Suspense>
    );
};

export default GamePage;