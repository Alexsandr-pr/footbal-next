"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const Refresh = ({
    children,
    ttl
} : {
    ttl:number;
    children: ReactNode
}) => {
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            router.refresh();
        }, ttl * 1000); 

        return () => clearInterval(interval);
    }, [router]);

    return (
        <>
            {children}
        </>
    )
}

export default Refresh;
