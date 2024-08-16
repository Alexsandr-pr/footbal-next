"use client"

import { FallbackImageProps } from '@/types/props/match';
import ImageS from 'next/image';
import { useState, useEffect } from 'react';

const FallbackImage = ({ src, alt, width, height } : FallbackImageProps) => {
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [imageExists, setImageExists] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImgSrc(src);
            setIsLoading(false);
        };
        img.onerror = () => {
            setImageExists(false);
            setIsLoading(false);
        };
    }, [src]);

    if (isLoading) {
        return (
            <ImageS
                src="/assets/loading/loading.gif" 
                height={10}
                width={10}
                alt="Loading"
            />
        );
    }

    if (!imageExists) {
        return null;
    }

    return imgSrc ? <img width={width} height={height} src={imgSrc} alt={alt} /> : null;
};

export default FallbackImage;

