"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";

import { setShowLiveGames } from "@/store/filterSlice";
import { usePathname } from "next/navigation";

import styles from "../main-header-block.module.scss";
import Image from "next/image";

const LiveGameButton = () => {

    const loadingShowLiveGames = useSelector((state:RootState) => state.filter.loadingShowLiveGames);

    const dispatch = useDispatch();
    const pathname = usePathname();

    const liveGamesCount = useSelector(
        (state: RootState) => state.filter.liveGamesCount
    );

    const showLiveGames = useSelector(
        (state: RootState) => state.filter.showLiveGames
    );

    const handleShowLiveGames = (value: boolean) => {
        dispatch(setShowLiveGames(value));
    };

    return (
        <>
            {
                pathname === "/" ? (
                    <>
                        <button  
                            className={`${styles["button-border"]} ${styles["button-gr"]} ${!showLiveGames ? styles["active"] : ""}`}
                            onClick={() => handleShowLiveGames(false)}
                        >
                            TODOS
                        </button>
                        <button 
                            onClick={() => handleShowLiveGames(true)} 
                            className={`${styles["button-border"]} ${styles["button-red"]} ${showLiveGames ? styles["active"] : ""}`}
                        >
                        VIVO ({
                            loadingShowLiveGames ? <Image 
                                width={10}
                                height={10}
                                alt="loading"
                                src={"/assets/loading/loading.gif"}/> : liveGamesCount
                        })
                        </button>
                    </> ) : null
            }
        </>
    )
}

export default LiveGameButton