"use client";
import Link from "next/link";
import AsideSpoller from "./spoller/AsideSpoller";
import { asideLinks } from "@/consts/asideLinks";

import "./aside.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


function Aside() {
    const header = useSelector((state:RootState) => state.counter.header);

    const data: Array<{ text: string }> = [
        { text: "Copa de la Liga" },
        { text: "Prim. B Nacional" },
        { text: "Copa Argentina" },
        { text: "Libertadores" },
        { text: "Champions" },
        { text: "Elim. Conmebol" },
        { text: "Ranking Titulos" },
        { text: "Ranking Copas Int" }
    ];

    return (
        <aside style={{right: header ? "0%" : "-120%"}} className="main-block__aside aside">
            <div className="aside__image-top">
                <img src="/assets/aside/image-top.png" alt=""/>
            </div>
            <div className="aside__menu">
                <div className="aside__select select">
                    <AsideSpoller title={"Destacado"} data={data}/>
                    <AsideSpoller title={"Argentina"} data={data}/>
                    <AsideSpoller title={"Copas Int."} data={data}/>
                    <AsideSpoller title={"Ligas"} data={data}/>
                    <AsideSpoller title={"Selecciones"} data={data}/>
                </div>
                <ul className="aside__links links-aside">
                    {
                        asideLinks.map(({label}, index) => (
                            <li key={index} className="links-aside__item">
                                <button className="links-aside__button">
                                    {label}
                                </button>
                            </li>
                        ))
                    } 
                </ul>
                <div className="aside__bottom">
                    <Link href="/">Legal - Privacidad</Link>
                </div>
            </div>
            
            
        </aside>
    );
}

export default Aside;