"use client"
import { MenuItem } from '@/types/menu';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from "react";


const AsideSpoller = ({
    items,
    name
} : {
    name:string;
    items: Array<MenuItem>;
}) => {
    const [animationParent] = useAutoAnimate();
    const [state, setState] = useState(false);

    return (
        <div ref={animationParent} className="select__block">
            <button style={{color: state ? "var(--green)" : "var(--white)"}} onClick={() => setState(prev => !prev)} className="select__button">
                {name}
                <ChevronDown style={{transform: `rotate(${state ? "180deg" : "0deg"})` }} height={24} width={24}/>
            </button>
            { state && 
                <ul  className="select__list">
                    {
                        items.map(({name, link}, index) => (
                            <li key={index + name + link} className="select__item">
                                <Link href={link}>{name}</Link>
                            </li>
                        ))
                    }
                    
                </ul>
            }
        </div>
    )
}

export default AsideSpoller