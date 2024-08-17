"use client"

import Loading from '@/components/ui/loading/Loading';
import { FallbackImageProps } from '@/types/props/match';
import { useState, useEffect } from 'react';

const FallbackImage = ({ src, alt, width, height, spinnerSize } : FallbackImageProps) => {
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

    if (isLoading) return <Loading size={spinnerSize} />

    if (!imageExists) return null;
    
    return imgSrc ? <img width={width} height={height} src={imgSrc} alt={alt} /> : null;
};

export default FallbackImage;

