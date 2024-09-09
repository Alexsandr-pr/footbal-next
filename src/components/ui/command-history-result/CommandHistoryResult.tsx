import styles from "./command-history-result.module.scss";

const CommandHistoryResult = ({
    data
} : {
    data: number[];
}) => {
    return (
        <ul className={styles.commandhistoryresult}>
            {
                data.map((item, index) => {
                    return (
                        <li key={index} className={`${styles.commandhistoryresultblock}
                            ${ item === 0 ? styles.draw : null}
                            ${ item === 1 ? styles.win : null}
                            ${ item === 2 ? styles.loss : null}
                        `}>
                            { item === 0 ? <div className="">E</div> : null}
                            { item === 1 ? <div className="">V</div> : null}
                            { item === 2 ? <div className="">D</div> : null}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CommandHistoryResult