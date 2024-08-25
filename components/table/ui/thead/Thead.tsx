import React, { ReactNode } from 'react'
import "./thead.scss"

const Thead = ({
    children
} : {
    children:ReactNode;
}) => {
    return (
        <thead className='table-thead'>
            {children}
        </thead>
    )
}

export default Thead