
import { ReactNode, Suspense } from "react";
import MainHeaderBlock from "./_components/main-header-block/MainHeaderBlock";
import Reclama from "./_components/reclama/Reclama";
import Loading from "./loading";



function Layout({ children }: { children: ReactNode }) {
    
    return (
        <>
            <MainHeaderBlock/>
            <Reclama />
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </>
    );
}


export default Layout;
