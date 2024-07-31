import Link from "next/link"
import styles from  "./command.module.scss"
import "./command.scss"
import { Team } from "@/types/home"

// const options = {
//     // game center teams block header page
//     "option-64*20": {
//         teamImageSize: 64,
//         countryImageSize: 32,
//         mobile: {
//             teamImageSize: 36,
//             countryImageSize: 20,
//         }
//     },
//     "option-32*16": {
//         teamImageSize: 32,
//         countryImageSize: 16,
//         mobile: {
//             teamImageSize: 16,
//             countryImageSize: 12,
//         }
//     },
//     "option-16*8": {
//         teamImageSize: 16,
//         countryImageSize: 8,
//         mobile: {
//             teamImageSize: 16,
//             countryImageSize: 12,
//         }
//     },
//     "option-24*12": {
//         teamImageSize: 24,
//         countryImageSize: 12,
//         mobile: {
//             teamImageSize: 24,
//             countryImageSize: 12,
//         }
//     },
//     "option-24*14": {
//         teamImageSize: 24,
//         countryImageSize: 14,
//         mobile: {
//             teamImageSize: 24,
//             countryImageSize: 14,
//         }
//     },
// }


const Command = ({
    team,
    position,
    imagesStyles,
    reverse,
    country_id,
    isInternationl
}: {
    isInternationl:boolean;
    team:Team;
    country_id:string;
    position: "left" | "right";
    imagesStyles?: "command-home" | "commandGameCenter" | "commandGameCenterHeader";
    reverse?: boolean;
}) => {
    const flagStyle = position === "right" ? { right: "-4px" } : { left: "-4px" };

    return (
        <Link href="#" className={styles.body}>
            {
                !reverse && <span style={{textAlign: `${position}`}} className={styles.title}>{team?.name}</span> 
            }
            <div className={`${imagesStyles} ${styles.command}`}>
                {
                    isInternationl && <img style={flagStyle} src={`https://www.sports-stats.net/images/country/${country_id}/4`} alt="flag" className="country"/>
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