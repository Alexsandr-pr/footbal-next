"use client"
import { useState, useEffect } from 'react';

interface FallbackImageProps {
    src: string;
    fallbackSrc: string;
    alt: string;
    width: number;
    height: number;
}

const FallbackImage: React.FC<FallbackImageProps> = ({ src, fallbackSrc, alt, width, height }) => {
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setImgSrc(src);
        img.onerror = () => setImgSrc(fallbackSrc);
    }, [src, fallbackSrc]);

    return <img width={width} height={height} src={imgSrc} alt={alt} />;
};

export default FallbackImage;
