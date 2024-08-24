"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ReactNode } from "react";


const LayoutContainer = ({
    children
} : {
    children: ReactNode;
}) => {
    const [block] = useAutoAnimate();
    return (
        <div ref={block} className="flex-16">
            {children}
        </div>
    )
}

export default LayoutContainer