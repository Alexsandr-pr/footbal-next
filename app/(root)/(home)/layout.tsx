
import { ReactNode, Suspense } from "react";
import MainHeaderBlock from "./_components/main-header-block/MainHeaderBlock";
import Reclama from "./_components/reclama/Reclama";
import Loading from "@/components/ui/loading/Loading";


function Layout({ children }: { children: ReactNode }) {
    
    return (
        <>
            <MainHeaderBlock/>
            <Reclama />
            <Suspense fallback={<Loading size={32} clazz="loading" />}>
                {children}
            </Suspense>
        </>
    );
}


export default Layout;
