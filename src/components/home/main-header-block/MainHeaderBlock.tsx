
import styles from "./main-header-block.module.scss";
import Links from "./links/Links";
import NotificationButton from "./buttons/NotificationButton";
import CuotasButton from "./buttons/CuotasButton";

import LiveGameButton from "./buttons/LiveGameButton";

const MainHeaderBlock = () => {
    
    return (
        <div className={styles.mainHeader__block}>
            <div className={`${styles["main-content__header"]} ${styles["content-header"]}`}>
                <div className={`${styles["content-header__top"]} ${styles["top-header"]}`}>
                    <Links />
                </div>
                <div className={`${styles["content-header__bottom"]} ${styles["botton-header"]}`}>
                    <div className={`${styles["botton-header__buttons"]} ${styles.grid}`}>
                        <LiveGameButton/>
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
