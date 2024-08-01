"use client"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ChevronDown } from 'lucide-react';
import { useState } from "react";

type DataItem = {
    text: string;
}


const AsideSpoller = ({
    data,
    title
} : {
    title:string;
    data: Array<DataItem>;
}) => {
    const [animationParent] = useAutoAnimate();
    const [state, setState] = useState(false);

    return (
        <div ref={animationParent} className="select__block">
            <button style={{color: state ? "var(--green)" : "var(--white)"}} onClick={() => setState(prev => !prev)} className="select__button">
                {title}
                <ChevronDown style={{transform: `rotate(${state ? "180deg" : "0deg"})` }} height={24} width={24}/>
            </button>
            { state && 
                <ul  className="select__list">
                    {
                        data.map(({text}, index) => (
                            <li key={index + text} className="select__item">
                                <button>{text}</button>
                            </li>
                        ))
                    }
                    
                </ul>
            }
        </div>
    )
}

export default AsideSpoller