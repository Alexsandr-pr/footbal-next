import React from 'react'

const Text = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <p className="h2h-item__text">{children}</p>
    )
}

export default Text