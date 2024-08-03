
import Link from "next/link";
import AsideSpoller from "./spoller/AsideSpoller";
import Parent from "./Parent";
import { MenuResponse } from "@/types/menu";

import "./aside.scss";

async function getData(): Promise<MenuResponse> {
    const res = await fetch('https://sports-stats.net/menu/');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


async function Aside() {
    
    const { categories, general } = await getData();
    
    return (
        <Parent>
            <div className="aside__image-top">
                <img src="/assets/aside/image-top.png" alt=""/>
            </div>
            <div className="aside__menu">
                <div className="aside__select select">
                    {
                        categories.map(({name, items}) => {
                            return <AsideSpoller name={name} items={items}/>
                        })
                    }
                </div>
                <ul className="aside__links links-aside">
                    {
                        general.map(({name, link}, index) => (
                            <li key={index} className="links-aside__item">
                                <Link href={link} className="links-aside__button">
                                    {name}
                                </Link>
                            </li>
                        ))
                    } 
                </ul>
                <div className="aside__bottom">
                    <Link href="/">Legal - Privacidad</Link>
                </div>
            </div>
        </Parent>
    );
}

export default Aside;