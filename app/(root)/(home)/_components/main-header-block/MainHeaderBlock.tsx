import styles from "./main-header-block.module.scss";

const MainHeaderBlock = () => {
    return (
        <div className={styles.mainHeader__block}>
            <div className={`${styles['main-content__header']} ${styles['content-header']}`}>
                <div className={`${styles['content-header__top']} ${styles['top-header']}`}>
                <button className={styles['top-header__button']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 6L9 12L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    LUN
                </button>
                <div className={`${styles['top-header__select']} ${styles['header-select']}`}>
                    <button className={styles['header-select__button']}>
                    <span>partidos de</span> HOY
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.45828 8.16715C4.51311 8.26225 4.59202 8.34123 4.68707 8.39615C4.78213 8.45107 4.88997 8.47998 4.99974 8.47998C5.10952 8.47998 5.21736 8.45107 5.31241 8.39615C5.40746 8.34123 5.48637 8.26225 5.5412 8.16715L9.1387 1.93631C9.19356 1.8413 9.22243 1.73353 9.22243 1.62382C9.22244 1.51411 9.19356 1.40633 9.13871 1.31132C9.08385 1.21631 9.00496 1.13741 8.90995 1.08255C8.81494 1.0277 8.70716 0.998817 8.59745 0.998814H1.40245C1.29274 0.998817 1.18497 1.0277 1.08996 1.08255C0.994946 1.13741 0.916049 1.21631 0.861196 1.31132C0.806343 1.40633 0.777465 1.51411 0.777466 1.62382C0.777467 1.73353 0.806345 1.8413 0.8612 1.93631L4.4587 8.16715H4.45828Z" fill="white"/>
                    </svg>
                    </button>
                    <div className={styles['header-select__block']}>
                    <div className={styles['header-select__option']}>
                        <span>partidos de</span> HOY
                    </div>
                    <div className={styles['header-select__option']}>
                        <span>partidos de</span> HOY
                    </div>
                    </div>
                </div>

                <button className={styles['top-header__button']}>
                    MIE
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
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
