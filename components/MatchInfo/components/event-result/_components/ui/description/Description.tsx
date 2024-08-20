import styles from "./description.module.scss";

const Description = ({
    text
}: {
    text?: string;
}) => {
    return (
        <p className={styles.description}>{text}</p>
    )
}

export default Description;