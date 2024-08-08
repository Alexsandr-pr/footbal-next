import Aside from "@/components/aside/Aside";
import Header from "@/components/header/Header";
import { ReactNode } from "react";
import "./layout.scss";
import Calendar from "@/components/ui/calendar/Calendar";

function Layout({
    children
} : {
    children: ReactNode
}) {
    return (
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
            <Calendar/>
        </div>
    )
}

export default Layout;

