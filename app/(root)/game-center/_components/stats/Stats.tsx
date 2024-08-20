import ContentBlock from "@/components/content-block/ContentBlock";
import styles from "./stats.module.scss";
import { Statistic } from "@/types/game-center";

const Stats = ({
    statistics
} : {
    statistics?:Statistic[];
}) => {
    return (
        <ContentBlock title="ESTADÍSTICAS DEL PARTIDO" buttonText="VER MÁS">
            <div className={styles.items}>
                {
                    statistics?.map(item => {
                        return (
                            <div className={styles.item}>
                                <div className={styles.title}>
                                    {item.name}
                                </div>
                                <div className={styles.flex}>
                                    <div style={{ width: `${item.percentages[0] * 100}%` }} className={styles.block}>{item.values[0]}</div>
                                    <div style={{ width: `${item.percentages[1] * 100}%` }} className={styles.block}>{item.values[1]}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </ContentBlock>
    )
}

export default Stats