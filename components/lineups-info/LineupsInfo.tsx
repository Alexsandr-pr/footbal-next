
import styles from "./lineups-info.module.scss";
import { Events, Subctitution } from "@/types/game-center";

const LineupsInfo = ({
    substitution,
    events
} : {
    events?: Events;
    substitution?: Subctitution;
}) => {

    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                { 
                    (events?.cards?.red && events?.cards?.yellow) ? <Card type="twos"/> : 
                    <>
                        { events?.cards?.red && <Card type="red"/> }
                        { events?.cards?.yellow && <Card type="yellow"/> }
                    </>
                }
            </li>
            <li style={{color: "var(--live)"}} className={styles.item}>
                { substitution?.player ? `${substitution.player}'` : null}
            </li>
            <li className={styles.item}>
                {
                    events?.substitution?.has_substitution && <img
                    height={24}
                    width={24}
                    alt="replace"
                    src={"/assets/icons/replace.svg"}
                />
                }
            </li>
            <li style={{color: "var(--white)"}} className={styles.item}>
                {events?.goals?.goals && events?.goals?.goals > 1 ? events.goals.goals : null}
            </li>
            <li className={styles.item}>
                {events?.goals?.own_goals && events?.goals?.own_goals > 0 ? (
                    <img
                        width={24}
                        height={24}
                        src="/assets/icons/ball-red.svg"
                        alt="ball-red"
                    />
                ) : events?.goals?.goals && events?.goals?.goals > 0 ? (
                    <img
                        width={24}
                        height={24}
                        src="/assets/icons/ball-white.svg"
                        alt="ball-white"
                    />
                ) : null}
            </li>
        </ul>
    )
}

const Card = ({
    type
} : {
    type?: "red" | "twos" | "yellow"
}) => {
    if(type === "twos") {
        return (
            <img 
                height={18}
                width={15} 
                src={`/assets/icons/actions-red-and-yellow-card.svg`}
                alt={`two-card`}
            />
        )
    } 
    if(type === "yellow") {
        return (
            <img 
                height={18}
                width={15} 
                src={`/assets/icons/yellow-card-min.svg`}
                alt={`yellow-card`}
            />
        )
    } 
    return (
        <img 
            height={18}
            width={15} 
            src={`/assets/icons/red-card-min.svg`}
            alt={`red-card`}
        />
    )
}

export default LineupsInfo