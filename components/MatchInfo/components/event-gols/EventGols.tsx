import styles from "./gols.module.scss";

interface Goal {
    id: number;
    time_to_display: string;
    player_sname: string;
}

// Определение типа для свойств компонента
interface EventGolsProps {
    goalsTeam1?: Goal[];
    goalsTeam2?: Goal[];
}

const EventGols = ({
    goalsTeam1,
    goalsTeam2
} : EventGolsProps ) => {
    return (
        <div className={styles.foot}>
            <div className={styles.item}>
                {
                    goalsTeam1?.map((item, index) => (
                        <span className={styles.block} key={item.id}>
                            <span className="green">
                                {item.time_to_display}
                            </span>
                            <p>{item.player_sname}{ (index < goalsTeam1.length - 1) ? ";" : null }</p>
                        </span>
                    ))
                }
            </div>
            <div className={styles.span}>
                <div className=""></div>
            </div>
            <div className={styles.item}>
                {
                    goalsTeam2?.map((item, index) => (
                        <span className={styles.block} key={item.id}>
                            <span className="green">
                                {item.time_to_display}
                            </span>
                            <p>{item.player_sname}{ (index < goalsTeam2.length - 1) ? ";" : null }</p>
                        </span>
                    ))
                }
            </div>
        </div>
    );
};

export default EventGols;
