
import React, { ReactNode } from 'react'

const Layout = ({
    children
} : {
    children:ReactNode;
}) => {

    return (
        <main className="flex-24">
            {children}
        </main>
    )
}

export default Layout