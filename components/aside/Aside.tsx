
import Link from "next/link";
import AsideSpoller from "./spoller/AsideSpoller";
import Parent from "./Parent";
import AsideLinks from "./AsideLinks";

import { MenuResponse } from "@/types/response";

import "./aside.scss";
import { _SERVER_API } from "@/config/consts";

async function getData(): Promise<MenuResponse> {
    const res = await fetch(`${_SERVER_API}/menu/`);

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
                <img
                    width={247}
                    height={254}
                    alt={"Image"}
                    src="/assets/aside/image-top.png"
                />
            </div>
            <div className="aside__menu">
                <div className="aside__select select">
                    {
                        categories.map(({name, items}) => {
                            return <AsideSpoller key={name} name={name} items={items}/>
                        })
                    }
                </div>
                <AsideLinks general={general}/> 
                <div className="aside__bottom">
                    <Link prefetch={false} href="/">Legal - Privacidad</Link>
                </div>
                {/* <div className="aside__bottom">
                    <Link prefetch={false} href="/title-ranking-history">Title Ranking History</Link>
                </div> */}
            </div>
        </Parent>
    );
}

export default Aside;