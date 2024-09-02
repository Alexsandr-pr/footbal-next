"use client"
import { _SERVER_API } from "@/config/consts";
import { ReactNode, useEffect, useState } from "react";
import { GameCenterResponse } from "@/types/response";
import { setGameData } from "@/store/gameCenterSlice";
import { useDispatch } from "react-redux";



function ClientRefresh({ initialData, id,
    children } : {
    initialData: GameCenterResponse;
    id:string;
    children:ReactNode
}) {
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${_SERVER_API}/gamecenter/${id}`);
            const result = await response.json();
            console.log(result)
            dispatch(setGameData(result));
        };

        const intervalId = setInterval(fetchData, initialData.TTL * 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {children}
        </>
    );
}

export default ClientRefresh;