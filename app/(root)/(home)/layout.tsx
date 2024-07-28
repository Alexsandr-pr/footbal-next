
import { ReactNode } from "react";
import MainHeaderBlock from "./_components/main-header-block/MainHeaderBlock";
import Reclama from "./_components/reclama/Reclama";


function Layout({
    children
} : {
    children: ReactNode
}) {
    return (
        <>
            <MainHeaderBlock/>
            <Reclama/>
            {children}
        </>
    )
}

export default Layout;