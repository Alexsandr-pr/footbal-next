"use client";
import Link from "next/link"
import styles from "./link.module.scss";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Links = () => {
    const pathname = usePathname();

    return (
        <>
            <Link  prefetch={false}  style={{visibility: pathname === "/yesterday" ? "hidden" : "visible"}} href="/yesterday" className={styles.link}>
                <ChevronLeft />
                LUN
            </Link>
            <Link prefetch={false} href="/" className={`${styles.link} ${styles.home}`}>
                <span className={styles.ds}>partidos de</span> HOY
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.95841 8.16764C5.01323 8.26274 5.09215 8.34172 5.1872 8.39664C5.28225 8.45156 5.39009 8.48047 5.49986 8.48047C5.60964 8.48047 5.71748 8.45156 5.81253 8.39664C5.90758 8.34172 5.98649 8.26274 6.04132 8.16764L9.63882 1.9368C9.69368 1.84179 9.72256 1.73402 9.72256 1.62431C9.72256 1.5146 9.69368 1.40682 9.63883 1.31181C9.58397 1.2168 9.50508 1.1379 9.41007 1.08304C9.31506 1.02819 9.20728 0.999305 9.09757 0.999302H1.90257C1.79286 0.999305 1.68509 1.02819 1.59008 1.08304C1.49507 1.1379 1.41617 1.2168 1.36132 1.31181C1.30646 1.40682 1.27759 1.5146 1.27759 1.62431C1.27759 1.73402 1.30647 1.84179 1.36132 1.9368L4.95882 8.16764H4.95841Z" fill="var(--white)"/>
                </svg>
            </Link>
            <Link  prefetch={false}  style={{visibility: pathname === "/tomorrow" ? "hidden" : "visible"}} href="/tomorrow" className={styles.link}>
                MIE
                <ChevronRight/>
            </Link>
        </>
    )   
}

export default Links