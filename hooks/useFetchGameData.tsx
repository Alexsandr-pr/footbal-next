"use client"
import { _SERVER_API } from '@/config/consts';
import { setGameData } from '@/store/gameCenterSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


export const useFetchGameData = (id: string) => {
    const dispatch = useDispatch();

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        const fetchData = async () => {
            try {
                const response = await fetch(`${_SERVER_API}/gamecenter/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                console.log(result);
                dispatch(setGameData(result));

                if (intervalId) {
                    clearInterval(intervalId);
                }

                if (result.TTL) {
                    intervalId = setInterval(fetchData, result.TTL * 1000);
                }
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [id, dispatch]);
};