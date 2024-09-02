"use client"
import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type RefreshWrapperProps = {
    children: ReactNode;
    interval: number;
};

const RefreshWrapper = ({ children, interval }: RefreshWrapperProps) => {
    const router = useRouter();

    useEffect(() => {
        const refreshInterval = setInterval(() => {
            router.refresh();
        }, interval);

        return () => clearInterval(refreshInterval); 
    }, [router, interval]);

    return <>{children}</>;
};

export default RefreshWrapper;
