import Aside from "@/components/aside/Aside";
import Header from "@/components/header/Header";
import { ReactNode } from "react";
import StoreProvider from "@/store/StoreProvider";

import "./layout.scss";

function Layout({
    children
} : {
    children: ReactNode
}) {
    return (
        <StoreProvider>
            <div className="wrapper">
                <Header/>
                <main className="main">
                    <div className="main-block__container">
                        <div className="main-block__body">
                            <Aside/>
                            <div className="main-block__content main-content">
                                {children}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </StoreProvider>
        
    )
}

export default Layout;

