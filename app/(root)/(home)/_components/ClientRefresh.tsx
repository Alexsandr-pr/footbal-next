"use client"
import { _SERVER_API } from "@/config/consts";
import { useEffect, useState } from "react";
import Today from "./home/Today";
import { LeaguesResponse } from "@/types/response";
import { useRouter } from "next/navigation";


function ClientRefresh({ initialData } : {
    initialData: LeaguesResponse;
}) {
    const [data, setData] = useState(initialData);
    const router = useRouter()
    useEffect(() => {
        const fetchData = async () => {
            const response = await  fetch(`${_SERVER_API}/games/today`);
            const result = await response.json();
            setData(result);
            router.refresh();
        };

        const intervalId = setInterval(fetchData, initialData.ttl * 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Today calendar={data?.calendar} leagues={data?.leagues} />
    );
}

export default ClientRefresh; 