import { ReactNode } from "react";
import styles from "./parent.module.scss";

const Parent = ({
    type,
    children
} : {
    type: "gc" | "home";
    children: ReactNode
}) => {

    if(type === "gc") {
        return (
            <div className={styles.body}>
                {children}
            </div>
        )
    } else {
        return (
            <div className={styles.span}>
                {children}
            </div>
        )
    }
}

export default Parent