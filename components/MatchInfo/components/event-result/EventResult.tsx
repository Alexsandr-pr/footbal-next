import { getGridStyle } from "@/lib/utils";
import styles from "./result.module.scss";

interface EventResultProps {
    scores?: number[];
    status: {
        enum: number;
    };
    redCards1:number;
    redCards2:number;
}

const EventResult = ({ 
    redCards2,
    redCards1,
    scores,
    status,
}: EventResultProps) => {

    const colorStyle = { color: status.enum === 2 ? "var(--live)" : "var(--white)" };


    if (!scores || status.enum === 1) {
        return <div style={colorStyle} className={styles.span}>-</div>;
    }

    return (
        <div className={styles.span}>
            <div className={styles.block}>
                <div className={styles.number}>
                    <div style={getGridStyle(redCards1)} className={styles.gol}>
                        {RenderGoals(redCards1)}
                    </div>
                    <span  className={styles.score}>(1)</span> <span style={colorStyle} className={styles.scores}>{scores[0]}</span>
                </div>
                <div style={colorStyle} className={styles.tire}>-</div>
                <div className={styles.number}>
                    <span style={colorStyle} className={styles.scores}>{scores[1]}</span> <span  className={styles.score}>(1)</span>
                    <div style={getGridStyle(redCards2)} className={styles.gol}>
                        {RenderGoals(redCards2)}
                    </div>
                </div>
            </div>
            {/* {
                gameTimeToDisplay && (<div className={styles.text}>
                    {gameTimeToDisplay}
                </div>)
            } */}
        </div>
    );
    
}

const RenderGoals = (count: number) => {
    return Array.from({ length: count }).map((_, index) => (
        <span key={index} className={styles.ball}></span>
    ));
};

export default EventResult;
