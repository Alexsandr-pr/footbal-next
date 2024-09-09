import React, { ReactNode } from 'react'
import styles from  "./thead.module.scss"

const Thead = ({
    children
} : {
    children:ReactNode;
}) => {
    return (
        <thead className={styles.thead}>
            {children}
        </thead>
    )
}

export default Thead