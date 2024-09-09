import { ReactNode } from "react";
import styles from "./row.module.scss";


const Row = ({
    children
} : {
    children:ReactNode;
}) => {
    return (
        <tr  className={styles.row}>
            {children}
        </tr>
    )
}

export default Row