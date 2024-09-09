import React, { ReactNode } from 'react'
import styles from "./tbody.module.scss"

const Tbody =  ({
    children
} : {
    children:ReactNode;
}) => {
    return (
        <tbody className={styles.tablebody}>
            {children}
        </tbody>
    )
}

export default Tbody