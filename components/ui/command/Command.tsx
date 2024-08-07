import Link from "next/link"
import styles from  "./command.module.scss"
import "./command.scss"
import { Team } from "@/types/home"



const Command = ({
    team,
    position,
    imagesStyles,
    reverse,
    isInternationl,
    show_country_flags
}: {
    isInternationl:boolean;
    team:Team;
    position: "left" | "right";
    imagesStyles?: "command-home" | "commandGameCenter" | "commandGameCenterHeader";
    reverse?: boolean;
    show_country_flags?:boolean;
}) => {
    const flagStyle = position === "right" ? { right: "-4px" } : { left: "-4px" };

    console.log(team.country_id)
    return (
        <Link href="#" className={styles.body}>
            {
                !reverse && <span style={{textAlign: `${position}`}} className={styles.title}>{team?.name}</span> 
            }
            <div className={`${imagesStyles} ${styles.command}`}>
                {
                    show_country_flags && <img style={flagStyle} src={`https://www.sports-stats.net/images/country/${team.country_id}/1`} alt="flag" className="country"/>
                }
                <div className="comand-imageteam">
                    <img src={`https://www.sports-stats.net/images/team/${team?.id}/4`} className="team"/>
                </div>
            </div>
            {
                reverse && <span style={{textAlign: `${position}`}} className={styles.title}>{team?.name}</span> 
            }
        </Link>
    )
}

export default Command