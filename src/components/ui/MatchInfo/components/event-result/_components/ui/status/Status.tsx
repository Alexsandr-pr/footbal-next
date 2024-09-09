import styles from "./status.module.scss";

const Status = ({
    statusName
}: {
    statusName?:string;
}) => {
    return (
        <p className={styles.text}>
            {statusName}
        </p>
    )
}

export default Status