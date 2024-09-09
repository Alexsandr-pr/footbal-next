
import { MenuItem } from '@/lib/types/props/menu/menu';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from "react";
import styles from "../aside.module.scss"

const AsideSpoller = ({
    items,
    name,
    icon_url
} : {
    name:string;
    items: Array<MenuItem>;
    icon_url:string;
}) => {
    const [state, setState] = useState(false);
    const [block]  = useAutoAnimate();

    return (
        <div ref={block} className="select__block">
            <button style={{color: state ? "var(--green)" : "var(--white)"}} onClick={() => setState(prev => !prev)} className={styles.selectBlockButton}>
                <div className={styles.selectNameCategory}>
                    {
                        icon_url && <img width={16} height={16} src={icon_url} alt="" />
                    }
                    {name}
                </div>
                <ChevronDown style={{transform: `rotate(${state ? "180deg" : "0deg"})` }} height={24} width={24}/>
            </button>
            <ul className={`${styles.selectList} ${state ? styles.active : ""}`}>
                {
                    items.map(({name, link}, index) => (
                        <li  key={index + name + link} className={styles.selectItem}>
                            <Link prefetch={false} href={link}>{name}</Link>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default AsideSpoller