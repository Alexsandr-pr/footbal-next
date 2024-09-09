"use client";
import { RootState } from '@/lib/store/store';
import  { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import styles from "./aside.module.scss"

const Parent = ({
    children
} : {
    children: ReactNode;
}) => {

    const header = useSelector((state:RootState) => state.counter.header);
    
    return (
        <aside style={{right: header ? "0%" : "-120%"}} className={styles.mainBlockAside}>
            {children}
        </aside>
    )
}

export default Parent