import { ReactNode } from "react";
import styles from "./block.module.scss";

const Block = ({
    children,
    time
}: {
    children:ReactNode;
    time?:string;
}) => {
    return (
        <div className={styles.block}>
            {children}
        </div>
    )
}

export default Block