import { getGridStyle } from "@/lib/utils";
import styles from "./result.module.scss";

interface EventResultProps {
    scores?: number[];
    status: {
        enum: number;
    };
    redCards1: number;
    redCards2: number;
    penalties?: [number, number] | [];
    description?: string;
}

const EventResult = ({
    redCards2,
    redCards1,
    scores,
    status,
    penalties,
    description
}: EventResultProps) => {

    const colorStyle = { color: status.enum === 2 ? "var(--live)" : "var(--white)" };

    if (!scores || scores.length < 2 || status.enum === 1) {
        return <div style={colorStyle} className={styles.span}>-</div>;
    }

    return (
        <div className={styles.span}>
            <div className={styles.block}>
                <div className={styles.number}>
                    <div style={getGridStyle(redCards1)} className={`${styles.gol} ${penalties && penalties.length > 0 && penalties[0] !== undefined && styles.marginR}`}>
                        {RenderGoals(redCards1)}
                    </div>
                    {penalties && penalties.length > 0 && penalties[0] !== undefined && (
                        <span className={styles.score}>({penalties[0]})</span>
                    )}
                    <span style={colorStyle} className={styles.scores}>{scores[0]}</span>
                </div>
                <div style={colorStyle} className={styles.tire}>-</div>
                <div className={styles.number}>
                    <span style={colorStyle} className={styles.scores}>{scores[1]}</span>
                    {penalties && penalties.length > 1 && penalties[1] !== undefined && (
                        <span className={styles.score}>({penalties[1]})</span>
                    )}
                    <div style={getGridStyle(redCards2)} className={`${styles.gol} ${penalties && penalties.length > 1 && penalties[1] !== undefined && styles.marginL}`}>
                        {RenderGoals(redCards2)} 
                    </div>
                </div>
            </div>
            {
                description && <div className={styles.description}>{description}</div>
            }
            
        </div>
    );
}

const RenderGoals = (count: number) => {
    return Array.from({ length: count }).map((_, index) => (
        <span key={index} className={styles.ball}></span>
    ));
};

export default EventResult;
