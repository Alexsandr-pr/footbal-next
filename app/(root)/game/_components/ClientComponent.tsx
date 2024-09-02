"use client"
import { _SERVER_API } from '@/config/consts';
import { useFetchGameData } from '@/hooks/useFetchGameData';
import { setGameData } from '@/store/gameCenterSlice';
import { GameCenterResponse } from '@/types/response';
import React, { ReactNode } from 'react'
import { useDispatch } from 'react-redux';

const ClientComponent = ({
    children,
    initialData,
    id
}: {
    initialData:GameCenterResponse;
    children:ReactNode;
    id:string
}) => {
    const dispatch = useDispatch();

    dispatch(setGameData(initialData?.game));
    useFetchGameData(id);
    return (
        <>
            {children}
        </>
    )
}

export default ClientComponent