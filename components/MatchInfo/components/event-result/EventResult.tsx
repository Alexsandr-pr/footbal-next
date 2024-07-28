import styles from "./result.module.scss";

interface EventResultProps {
    scores?: number[];
    status: {
        enum: number;
    };
}

const EventResult: React.FC<EventResultProps> = ({ scores, status }) => {

    const renderGoals = (count: number) => {
        return Array.from({ length: count }).map((_, index) => (
            <span key={index} className={styles.ball}></span>
        ));
    };

    const getGridStyle = (totalGoals: number) => {
        if (totalGoals > 2) {
            return {
                gridTemplateColumns: 'repeat(2, 1fr)'
            };
        } else {
            return {
                gridTemplateColumns: '1fr'
            };
        }
    };
    
    if (!scores || status.enum === 1) {
        return <div className="status-span">-</div>;
    }

    return (
        <div className={styles.span}>
            <div className={styles.block}>
                <div className={styles.number}>
                    <div style={getGridStyle(scores[0])} className={styles.gol}>
                        {renderGoals(scores[0])}
                    </div>
                    <span className={styles.score}>(1)</span> <span className={styles.scores}>{scores[0]}</span>
                </div>
                <div className={styles.tire}>-</div>
                <div className={styles.number}>
                    <span className={styles.scores}>{scores[1]}</span> <span className={styles.score}>(1)</span>
                    <div style={getGridStyle(scores[1])} className={styles.gol}>
                        {renderGoals(scores[1])}
                    </div>
                </div>
            </div>
            <div className={styles.text}>
                Global 1-3
            </div>
        </div>
    );
    
}

export default EventResult;
