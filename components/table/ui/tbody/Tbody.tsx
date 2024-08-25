import React, { ReactNode } from 'react'

const Tbody =  ({
    children
} : {
    children:ReactNode;
}) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

export default Tbody