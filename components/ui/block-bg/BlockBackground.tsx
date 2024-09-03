
import { ReactNode } from "react";
import styles from "./block.module.scss";

const BlockBackground = ({
    children
} : {
    children:ReactNode;
}) => {
    return (
        <div className={styles.block}>
            {children}
        </div>
    )
}

export default BlockBackground