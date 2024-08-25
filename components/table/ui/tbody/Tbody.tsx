import React, { ReactNode } from 'react'
import "./tbody.scss"

const Tbody =  ({
    children
} : {
    children:ReactNode;
}) => {
    return (
        <tbody className='table-tbody'>
            {children}
        </tbody>
    )
}

export default Tbody