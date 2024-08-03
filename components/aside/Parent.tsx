"use client";
import { RootState } from '@/store/store';
import  { ReactNode } from 'react'
import { useSelector } from 'react-redux';

const Parent = ({
    children
} : {
    children: ReactNode;
}) => {

    const header = useSelector((state:RootState) => state.counter.header);
    
    return (
        <aside style={{right: header ? "0%" : "-120%"}} className="main-block__aside aside">
            {children}
        </aside>
    )
}

export default Parent