"use client"
import { _SERVER_API } from "@/config/consts";
import { useEffect, useState } from "react";

import { LeaguesResponse } from "@/types/response";
import Home from "../_components/home/Home";
import { useRouter } from "next/navigation";




function ClientRefreshTomorrow({ initialData } : {
    initialData: LeaguesResponse;
}) {
    const [data, setData] = useState(initialData);
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${_SERVER_API}/games/tomorrow`);
            const result = await response.json();
            setData(result);
            router.refresh()
        };

        const intervalId = setInterval(fetchData, initialData.ttl * 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Home calendar={data?.calendar} leagues={data?.leagues} />
    );
}

export default ClientRefreshTomorrow;