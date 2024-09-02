"use client";
import React, { useEffect, useRef } from "react";

interface SoundPlayerProps {
    play: boolean;
}

const SoundPlayer: React.FC<SoundPlayerProps> = ({ play }) => {
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
            audioRef.current.play();
        }
    }, [play]);

    return null; 
};

export default SoundPlayer;
