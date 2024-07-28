import Link from "next/link";
import styles from "./main-header-block.module.scss";

const MainHeaderBlock = () => {
    return (
        <div className={styles.mainHeader__block}>
            <div className={`${styles['main-content__header']} ${styles['content-header']}`}>
                <div className={`${styles['content-header__top']} ${styles['top-header']}`}>
                    <Link href="/yesterday" className={styles['top-header__button']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 6L9 12L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        LUN
                    </Link>
                    <div className={`${styles['top-header__select']} ${styles['header-select']}`}>
                        <button className={styles['header-select__button']}>
                            <span>partidos de</span> HOY
                        
                        </button>
                    </div>

                    <Link  href="/tomorrow" className={styles['top-header__button']}>
                        MIE
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
                <div className={`${styles['content-header__bottom']} ${styles['botton-header']}`}>
                    <div className={styles['botton-header__buttons']}>
                        <button className={`${styles['button-border']} ${styles['button-gr']} ${styles['active']}`}>TODOS</button>
                        <button className={`${styles['button-border']} ${styles['button-red']}`}>VIVO (12)</button>
                    </div>
                    <div className={styles['botton-header__buttons']}>
                        <button className={styles['button-green']}>
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
