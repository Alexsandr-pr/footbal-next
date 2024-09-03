"use client";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { disableSound } from '@/store/soundSlice';
import { RootState } from "@/store/store";

const SoundPlayer: React.FC = () => {
    const play = useSelector((state: RootState) => state.sound.play);
    const dispatch = useDispatch();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio("/assets/sound/sound.mp3");
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (play && audioRef.current) {
            audioRef.current.play().then(() => {
                dispatch(disableSound());
            });
        }
    }, [play, dispatch]);

    return null; 
};

export default SoundPlayer;
