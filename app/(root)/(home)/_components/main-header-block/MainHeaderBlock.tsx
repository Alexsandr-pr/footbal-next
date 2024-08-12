"use client";

import styles from "./main-header-block.module.scss";
import Links from "./links/Links";
import { usePathname } from "next/navigation";
import "./active.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setShowLiveGames } from "@/store/filterSlice";
import NotificationButton from "./NotificationButton";
import CuotasButton from "./CuotasButton";

const MainHeaderBlock = () => {
    const dispatch = useDispatch();

    const showLiveGames = useSelector(
        (state: RootState) => state.filter.showLiveGames
    );
    
    const liveGamesCount = useSelector(
        (state: RootState) => state.filter.liveGamesCount
    );

    const pathname = usePathname();
    
    const handleShowLiveGames = (value: boolean) => {
        dispatch(setShowLiveGames(value));
    };

    return (
        <div className={styles.mainHeader__block}>
            <div className={`${styles["main-content__header"]} ${styles["content-header"]}`}>
                <div className={`${styles["content-header__top"]} ${styles["top-header"]}`}>
                    <Links />
                </div>
                <div className={`${styles["content-header__bottom"]} ${styles["botton-header"]}`}>
                    <div className={`${styles["botton-header__buttons"]} ${styles.grid}`}>
                        {pathname === "/" ? (
                        <>
                            <button
                                onClick={() => handleShowLiveGames(false)}
                                    className={`${styles["button-border"]} ${styles["button-gr"]} ${
                                        !showLiveGames ? styles["active"] : ""
                                    }`}
                                >
                            TODOS
                            </button>

                            <button
                                onClick={() => handleShowLiveGames(true)}
                                className={`${styles["button-border"]} ${
                                    styles["button-red"]
                                } ${showLiveGames ? styles["active"] : ""}`}
                                >
                                VIVO ({liveGamesCount})
                            </button>
                        </>
                        ) : null}
                    </div>
                    <div className={styles["botton-header__buttons"]}>
                        <CuotasButton/>
                        <NotificationButton/>
                    </div>
                </div>
            </div>
            <div className={styles.breadcrumbs}>
                Football results and promiedos standings
            </div>
        </div>
    );
};

export default MainHeaderBlock;
