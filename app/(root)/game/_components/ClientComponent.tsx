"use client"
import { setGameData } from '@/store/gameCenterSlice';
import { Game } from '@/types/game-center';
import React, { ReactNode } from 'react'
import { useDispatch } from 'react-redux';

const ClientComponent = ({
    children,
    game
}: {
    game:Game
    children:ReactNode;
}) => {
    const dispatch = useDispatch();

    dispatch(setGameData(game));
    
    return (
        <>
            {children}
        </>
    )
}

export default ClientComponent