// components/ui/aside/Aside.tsx

import Link from "next/link";
import AsideSpoller from "./spoller/AsideSpoller";
import Parent from "./Parent";
import AsideLinks from "./AsideLinks";
import { MenuResponse } from "@/lib/types/response";
import styles from "./aside.module.scss";

interface AsideProps {
    categories: MenuResponse["categories"];
    general: MenuResponse["general"];
}

const Aside: React.FC<AsideProps> = ({ categories, general }) => {
    return (
        <Parent>
            <div className={styles.asideBlockTOP}>
                <img
                width={247}
                height={254}
                alt="Image"
                src="/assets/aside/image-top.png"
                />
            </div>
                <div className={styles.asideBlockMenu}>
                <div className={styles.asideBlockSelect}>
                    {categories.map(({ name, items, icon_url }) => (
                        <AsideSpoller icon_url={icon_url} key={name} name={name} items={items} />
                    ))}
                </div>
                <AsideLinks general={general} />
                <div className={styles.asideBlockBottom}>
                    <Link prefetch={false} href="/">
                        Legal - Privacidad
                    </Link>
                </div>
            </div>
        </Parent>
    );
};

export default Aside;
