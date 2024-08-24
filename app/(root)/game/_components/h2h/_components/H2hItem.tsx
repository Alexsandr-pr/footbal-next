import React, { ReactNode } from 'react'

const H2hItem = ({
    clazz,
    children
} : {
    clazz?: string;
    children: ReactNode;
}) => {
    return (
        <div className={`game-center__h2h-item h2h-item ${clazz}`}>
            {children}
        </div>
    )
}

export default H2hItem