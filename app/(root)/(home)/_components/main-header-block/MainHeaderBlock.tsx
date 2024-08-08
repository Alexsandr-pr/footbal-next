"use client";

import styles from "./main-header-block.module.scss";
import Links from "./links/Links";
import { usePathname } from "next/navigation";
import "./active.scss";
import { Bell, BellOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { loadCoefficientFromCookies, loadSoundFromCookies, setShowLiveGames, toggleCoefficient, toggleSound } from "@/store/filterSlice";

const MainHeaderBlock = () => {
    const dispatch = useDispatch();

    const showLiveGames = useSelector(
        (state: RootState) => state.filter.showLiveGames
    );
    const {coefficient, sound} = useSelector(
        (state: RootState) => state.filter
    );
    const liveGamesCount = useSelector(
        (state: RootState) => state.filter.liveGamesCount
    );

    const pathname = usePathname();
    useEffect(() => {
        dispatch(loadCoefficientFromCookies());
    }, [dispatch]);

    useEffect(() => {
        dispatch(loadSoundFromCookies());
    }, [dispatch]);
    const handleShowLiveGames = (value: boolean) => {
        dispatch(setShowLiveGames(value));
    };

    const handleToggleCoefficient = () => {
        dispatch(toggleCoefficient());
    };

    return (
        <div className={styles.mainHeader__block}>
        <div
            className={`${styles["main-content__header"]} ${styles["content-header"]}`}
        >
            <div
            className={`${styles["content-header__top"]} ${styles["top-header"]}`}
            >
            <Links />
            </div>
            <div
            className={`${styles["content-header__bottom"]} ${styles["botton-header"]}`}
            >
            <div
                className={`${styles["botton-header__buttons"]} ${styles.grid}`}
            >
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
                <button
                onClick={() => handleToggleCoefficient()}
                className={`green-cuotas ${!coefficient ? "active" : ""}`}
                >
                CUOTAS
                </button>
                <button
                onClick={() => dispatch(toggleSound())}
                className={`${styles["button-green"]} button-off ${
                    sound ? "active" : ""
                }`}
                >
                {sound ? (
                    <Bell
                    color="var(--white)"
                    width={16}
                    height={18}
                    strokeWidth={2}
                    />
                ) : (
                    <BellOff
                    color="var(--green)"
                    width={16}
                    height={18}
                    strokeWidth={2}
                    />
                )}
                </button>
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
