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

    // Early return if conditions are not met
    if (!scores || scores.length < 2 || status.enum === 1) {
        return <div style={colorStyle} className={styles.span}>-</div>;
    }

    // Calculate maximum red cards and penalties to ensure consistent spacing
    const maxRedCards = Math.max(redCards1, redCards2);
    const maxPenalties = penalties ? Math.max(penalties[0] || 0, penalties[1] || 0) : 0;

    return (
        <div className={styles.span}>
            <div className={styles.block}>
                {/* Left side */}
                <div className={styles.number}>
                    <div style={getGridStyle(maxRedCards)} className={`${styles.gol} ${styles.marginR}`}>
                        {RenderGoals(redCards1, maxRedCards)}
                    </div>
                    {penalties && penalties.length > 0 && penalties[0] !== undefined && (
                        <span className={styles.score}>({penalties[0]})</span>
                    )}
                    <span style={colorStyle} className={styles.scores}>{scores[0]}</span>
                </div>

                {/* Separator */}
                <div style={colorStyle} className={styles.tire}>-</div>

                {/* Right side */}
                <div className={styles.number}>
                    <span style={colorStyle} className={styles.scores}>{scores[1]}</span>
                    {penalties && penalties.length > 1 && penalties[1] !== undefined && (
                        <span className={styles.score}>({penalties[1]})</span>
                    )}
                    <div style={getGridStyle(maxRedCards)} className={`${styles.gol} ${styles.marginL}`}>
                        {RenderGoals(redCards2, maxRedCards)}
                    </div>
                </div>
            </div>

            {/* Optional description */}
            {description && <div className={styles.description}>{description}</div>}
        </div>
    );
}

// Function to render goals and manage spacing
const RenderGoals = (count: number, maxCount: number) => {
    return Array.from({ length: maxCount }).map((_, index) => (
        <span key={index} className={`${styles.ball} ${index < count ? styles.visible : styles.hidden}`}></span>
    ));
};

export default EventResult;
