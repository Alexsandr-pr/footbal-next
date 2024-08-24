"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const Refresh = ({
    children
} : {
    children: ReactNode
}) => {
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            router.refresh();
        }, 10000); 

        return () => clearInterval(interval);
    }, [router]);

    return (
        <>
            {children}
        </>
    )
}

export default Refresh;
