"use client"
import { _SERVER_API } from "@/config/consts";
import { useEffect, useState } from "react";

import { LeaguesResponse } from "@/types/response";
import Home from "../_components/home/Home";




function ClientRefreshYesterday({ initialData } : {
    initialData: LeaguesResponse;
}) {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${_SERVER_API}/games/yesterday`);
            const result = await response.json();
            setData(result);
        };

        const intervalId = setInterval(fetchData, initialData.ttl * 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Home calendar={data?.calendar} leagues={data?.leagues} />
    );
}

export default ClientRefreshYesterday;