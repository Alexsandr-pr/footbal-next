

import { ReactNode } from "react";
import styles from "./layout.module.scss";
import Aside from "../ui/aside/Aside";
import { MenuResponse } from "@/lib/types/response";
import Header from "../ui/header/Header";
import Calendar from "../ui/calendar/Calendar";

interface MainLayoutProps {
    children: ReactNode;
    menuData: MenuResponse | null; 
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, menuData }) => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main className={styles.main}>
                <div className="main-block__container">
                    <div className={styles.mainBlockBody}>
                        {menuData ? (
                            <Aside categories={menuData.categories} general={menuData.general} />
                        ) : (
                            <div>Loading aside...</div> 
                        )}
                        <div className={styles.mainBlockContent}>{children}</div>
                    </div>
                </div>
            </main>
            <Calendar/>
        </div>
    );
};

export default MainLayout;
