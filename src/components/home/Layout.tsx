import React from 'react'
import MainHeaderBlock from './main-header-block/MainHeaderBlock';
import Reclama from './reclama/Reclama';

const Layout = ({
    children
} : {
    children:React.ReactNode;
}) => {
    return (
        <>
            <MainHeaderBlock/>
            <Reclama/>
            {children}
        </>
    )
}

export default Layout