import { MenuItem } from "@/lib/types/props/menu/menu";
import Link from "next/link";
import ButtonAside from "./ButtonAsideCalendario";
import styles from "./aside.module.scss"
const AsideLinks = ({
    general,
} : {
    general:MenuItem[];
}) => {

    
    return (
        <ul className={`${styles.asideBlockLinks} `}>
            {
                general.map(({name, link}, index) => {
                    if(name === "Calendario") {
                        return (
                            <>
                                {name ?  <ButtonAside key={`${link}-${index}-${name}-Calendario`} name={name}/> : null} 
                            </>
                        )
                    } else {
                        return (
                            <>
                            
                                {
                                    name && <li key={`${link}-${index}-${name}-Calendario`}>
                                <Link  prefetch={false}  href={link} className={styles.linksAsideButton}>
                                    {name}
                                </Link>
                            </li>
                                }
                            </>
                        )
                    }
                })
            } 
        </ul>
    )
}

export default AsideLinks