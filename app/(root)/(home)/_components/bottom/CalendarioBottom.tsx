
import { Calendar } from "@/types/home";
import styles from "./calendario-bottom.module.scss";
import Image from "next/image";

interface CalendarioBottomProps {
    calendar: Calendar | null;
}

const CalendarioBottom: React.FC<CalendarioBottomProps> = ({ calendar }) => {
    if (!calendar) {
        return null;
    }

    return (
        <div className={`${styles.calendar} bottom-calendario`}>
            <div className={styles.title}>
                <h3>{calendar.title}</h3>
            </div>
            
            <div className={styles.items}>
                <div className={styles.item}>
                    <p className={styles.label}>Anniversaries</p>
                    <div className={styles.blockitems}>
                        {calendar.clubs.map(club => (
                            <div key={club.id} className={styles.block}>
                                <div className={"bottom-image-36-block"}>
                                    <Image 
                                        height={36}
                                        width={36}
                                        className="bottom-image-36"
                                        src={`https://www.sports-stats.net/images/team/${club?.id}/4`} 
                                        alt={club.name} 
                                    />
                                </div>
                                <div className={styles.blockbody}>
                                    <p className={styles.name}>{club.name}</p>
                                    <div className={styles.text}>{club.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className={styles.item}>
                    <p className={styles.label}>Cumpleaños</p>
                    <div className={styles.blockitems}>
                    {calendar.players.map((player, index) => (

                        <div key={index} className={styles.block}>
                            <div className={styles.blockbody}>
                                <p className={styles.name}>{player.name}</p>
                                <div className={styles.text}>({player.team}) {player.text}</div>
                            </div>
                        </div>
                    ))}
                    </div>
                    
                </div>
            </div>
            
            <div className={styles.buttons}>
                <button className={styles.button}>Calendario Extendido</button>
            </div>
        </div>
    );
}

export default CalendarioBottom;
