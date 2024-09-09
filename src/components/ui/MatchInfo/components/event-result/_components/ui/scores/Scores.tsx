
import styles from "./scores.module.scss";

const Scores = ({
    scores,
    statusEnum,
    type
} : {
    scores?: number;
    statusEnum?: number;
    soundLocal?: boolean;
    type?: "gc";
}) => {

    if (scores === undefined) {
        return null;
    }

    const colorStyle = { 
        color: statusEnum === 2 ? "var(--live)" : "var(--white)", 
    };

    return (
        <span style={colorStyle} className={`${styles.scoreseventresult} ${type === "gc" ? styles.size : ""}`}>
            {scores}
        </span>
    );
}

export default Scores;