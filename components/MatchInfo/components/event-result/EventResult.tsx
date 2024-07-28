import styles from "./result.module.scss";

interface EventResultProps {
    scores?: number[];
    status: {
        enum: number;
    };
    redCards1: number;
    redCards2: number;
    agg?:number[];
}

const EventResult = ({ 
    scores,
    status,
    redCards1,
    redCards2,
    agg
}: EventResultProps) => {

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

    const colorStyle = { color: status.enum === 2 ? "var(--live)" : "var(--white)" };

    return (
        <div className={styles.span}>
            <div className={styles.block}>
                <div className={styles.number}>
                    <div style={getGridStyle(redCards1)} className={styles.gol}>
                        {renderGoals(redCards1)}
                    </div>
                    <span style={colorStyle} className={styles.score}></span> <span style={colorStyle} className={styles.scores}>{scores[0]}</span>
                </div>
                <div style={colorStyle} className={styles.tire}>-</div>
                <div className={styles.number}>
                    <span style={colorStyle} className={styles.scores}>{scores[1]}</span> <span style={colorStyle} className={styles.score}></span>
                    <div style={getGridStyle(redCards2)} className={styles.gol}>
                        {renderGoals(redCards2)}
                    </div>
                </div>
            </div>
            {
                agg && (<div className={styles.text}>
                    Global 1-3
                </div>)
            }
        </div>
    );
    
}

export default EventResult;
