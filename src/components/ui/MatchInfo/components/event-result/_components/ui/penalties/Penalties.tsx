import styles from "./penalties.module.scss";

const Penalties = ({
    penalties
} : {
    penalties: number;
}) => {
    return (
        <span className={styles.score}>({penalties})</span>
    )
}

export default Penalties