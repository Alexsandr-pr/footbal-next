"use client"
import { useState, useEffect } from 'react';

interface FallbackImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const FallbackImage: React.FC<FallbackImageProps> = ({ src, alt, width, height }) => {
    const [imgSrc, setImgSrc] = useState<string | null>(src);
    const [imageExists, setImageExists] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setImgSrc(src);
        img.onerror = () => setImageExists(false);
    }, [src]);

    if (!imageExists) {
        return null;
    }

    return imgSrc ? <img width={width} height={height} src={imgSrc} alt={alt} /> : null;
};

export default FallbackImage;
