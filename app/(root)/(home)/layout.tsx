"use client"
import { ReactNode, Suspense } from "react";
import MainHeaderBlock from "./_components/main-header-block/MainHeaderBlock";
import Reclama from "./_components/reclama/Reclama";
import Loading from "./loading";
import { FilterProvider } from '@/contexts/FilterContext';

function Layout({ children }: { children: ReactNode }) {
    return (
        <FilterProvider>
            <MainHeaderBlock/>
            <Reclama />
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </FilterProvider>
    );
}


export default Layout;
