import { Link } from "lucide-react";
import AsideSpoller from "../spoller/AsideSpoller";
import { asideLinks } from "@/consts/asideLinks";
import "./mobile.scss";

const MobileNav = () => {
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
        <div className="">

            <div className="aside__menu">
                <div className="aside__select select">
                    <AsideSpoller title={"Destacado"} data={data} />
                    <AsideSpoller title={"Argentina"} data={data} />
                    <AsideSpoller title={"Copas Int."} data={data} />
                    <AsideSpoller title={"Ligas"} data={data} />
                    <AsideSpoller title={"Selecciones"} data={data} />
                </div>
                <ul className="aside__links links-aside">
                    {asideLinks.map(({ label }, index) => (
                        <li key={index} className="links-aside__item">
                            <button className="links-aside__button">
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="aside__bottom">
                    <Link href="/">Legal - Privacidad</Link>
                </div>
            </div>
        </div>
        
    )
}

export default MobileNav