"use client";
import styles from "./main-header-block.module.scss";
import Links from "./links/Links";
import { useFilter } from "@/contexts/FilterContext";
import { usePathname } from "next/navigation";
import "./active.scss";

const MainHeaderBlock = () => {
    const { showLiveGames, setShowLiveGames, coefficient, handleCoefficient } = useFilter();

    const pathname = usePathname();

    
    return (
        <div className={styles.mainHeader__block}>
            <div className={`${styles['main-content__header']} ${styles['content-header']}`}>
                <div className={`${styles['content-header__top']} ${styles['top-header']}`}>
                    <Links />
                </div>
                <div className={`${styles['content-header__bottom']} ${styles['botton-header']}`}>
                    <div className={styles['botton-header__buttons']}>
                        <button
                            onClick={() => setShowLiveGames(false)}
                            className={`${styles['button-border']} ${styles['button-gr']} ${!showLiveGames ? styles['active'] : ''}`}
                        >
                            TODOS
                        </button>
                        {
                            pathname === "/" && (
                                <button
                                onClick={() => setShowLiveGames(true)}
                                className={`${styles['button-border']} ${styles['button-red']} ${showLiveGames ? styles['active'] : ''}`}
                            >
                                VIVO (12)
                            </button>
                            )
                        }
                        
                    </div>
                    <div className={styles['botton-header__buttons']}>
                        <button onClick={() => handleCoefficient()} className={`green-cuotas ${!coefficient ? "active" : ""}` }>
                            CUOTAS
                        </button>
                        <button className={`${styles['button-green']} ${styles['button-off']} ${styles['active']}`}>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.breadcrumbs}>
                Football results and promiedos standings
            </div>
        </div>
    );
}

export default MainHeaderBlock;
