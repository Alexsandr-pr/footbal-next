"use client";
import React, { useState } from 'react';

interface ImageWithCheckProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

const ImageWithCheck: React.FC<ImageWithCheckProps> = ({ src, alt, width, height, className }) => {
    const [isValid, setIsValid] = useState(true);

    const handleError = () => {
        setIsValid(false);
    };

    if (!isValid) {
        return null;
    }

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            onError={handleError}
        />
    );
};

export default ImageWithCheck;
