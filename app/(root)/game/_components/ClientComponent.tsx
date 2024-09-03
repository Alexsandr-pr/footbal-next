"use client"

import { setGameData, fetchGameData } from '@/store/gameCenterSlice';
import { GameCenterResponse } from '@/types/response';
import React, { ReactNode, useEffect, useRef } from 'react';
import { useAppDispatch } from '@/store/store'; 

const ClientComponent = ({
    children,
    initialData,
    id
}: {
    initialData: GameCenterResponse;
    children: ReactNode;
    id: string;
}) => {
    const dispatch = useAppDispatch();
    const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        
        if (initialData?.game) {
            dispatch(setGameData(initialData));
        }

        const setFetchInterval = (ttl: number) => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current); 
            }

            const fetchData = async () => {
                const action = await dispatch(fetchGameData(id));
                if (fetchGameData.fulfilled.match(action)) {
                    const updatedTTL = action.payload.TTL;
                    setFetchInterval(updatedTTL);
                }
            };

            intervalIdRef.current = setInterval(fetchData, ttl * 1000);
        };

        setFetchInterval(initialData.TTL);

        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, [dispatch, initialData, id]);
    return (
        <>
            {children}
        </>
    );
}

export default ClientComponent;
