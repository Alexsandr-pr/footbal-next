"use client";
import styles from "./main-header-block.module.scss";
import Links from "./links/Links";
import { useFilter } from "@/contexts/FilterContext";
import { usePathname } from "next/navigation";
import "./active.scss";
import { Bell, BellOff } from "lucide-react";
import { useState } from "react";

const MainHeaderBlock = () => {
    const { showLiveGames, setShowLiveGames, coefficient, handleCoefficient, liveGamesCount } = useFilter();
    const [state, setState] = useState(false);
    const pathname = usePathname();
    
    return (
        <div className={styles.mainHeader__block}>
            <div className={`${styles['main-content__header']} ${styles['content-header']}`}>
                <div className={`${styles['content-header__top']} ${styles['top-header']}`}>
                    <Links />
                </div>
                <div className={`${styles['content-header__bottom']} ${styles['botton-header']}`}>
                    <div  className={`${styles['botton-header__buttons']} ${styles.grid}`}>
                        <button
                            onClick={() => setShowLiveGames(false)}
                            className={`${styles['button-border']} ${styles['button-gr']} ${!showLiveGames ? styles['active'] : ''}`}
                        >
                            TODOS
                        </button>
                        
                                <button
                                onClick={() => setShowLiveGames(true)}
                                className={`${styles['button-border']} ${styles['button-red']} ${showLiveGames ? styles['active'] : ''}`}
                            >
                                VIVO ({liveGamesCount})
                            </button>
                            
                        
                        
                    </div>
                    <div className={styles['botton-header__buttons']}>
                        <button onClick={() => handleCoefficient()} className={`green-cuotas ${!coefficient ? "active" : ""}` }>
                            CUOTAS
                        </button>
                        <button onClick={() => setState(prev => !prev)} className={`${styles['button-green']} button-off ${state ? "active" : ""}`}>
                                {state ? (
                                <Bell color="var(--green)" width={16} height={18} strokeWidth={2} />
                                ) : (
                                    <BellOff color="var(--white)" width={16} height={18} strokeWidth={2} />
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
}

export default MainHeaderBlock;