import { MenuItem } from "@/types/props/menu/menu";
import Link from "next/link";
import ButtonAside from "./ButtonAsideCalendario";

const AsideLinks = ({
    general,
} : {
    general:MenuItem[];
}) => {

    
    return (
        <ul className="aside__links links-aside">
            {
                general.map(({name, link}, index) => {
                    if(name === "Calendario") {
                        return <ButtonAside key={name} name={name}/>
                    } else {
                        return (
                            <li key={name} className="links-aside__item">
                                <Link href={link} className="links-aside__button">
                                    {name}
                                </Link>
                            </li>
                        )
                    }
                })
            } 
        </ul>
    )
}

export default AsideLinks