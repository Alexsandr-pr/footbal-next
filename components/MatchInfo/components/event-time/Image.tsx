
"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { _SERVER_API } from '@/config/consts';

import { TVNetwork } from '@/types';

const ImageBlock = ({
    tv_networks,
}: {
    tv_networks: TVNetwork[];
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [errorCount, setErrorCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const handleError = () => {
        console.log('Image load error');
        if (currentIndex < tv_networks.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
            setErrorCount(prevCount => prevCount + 1);
        } else {
            setErrorCount(prevCount => prevCount + 1);
        }
    };

    const handleLoad = () => {
        console.log('Image loaded');
        setIsLoading(false);
    };

    if (errorCount >= tv_networks.length) {
        return null;
    }

    return (
        <>
            {isLoading && <Image
                src="/assets/loading/loading.gif" 
                height={10}
                width={10}
                alt="Loading"
            />} 
            {tv_networks.length > 0 && (
                <Image
                    height={24}
                    width={24}
                    src={`${_SERVER_API}/images/tvnetworks/${tv_networks[currentIndex].id}`}
                    alt={tv_networks[currentIndex].name}
                    onError={handleError}
                    onLoad={handleLoad}
                    style={{ display: isLoading ? 'none' : 'block' }}
                />
            )}
        </>
    );
}

export default ImageBlock;