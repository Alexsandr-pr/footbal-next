import { _SERVER_API } from "@/config/consts";
import styles from  "./title.module.scss";

const Title = ({
    title,
    imagePath
} : {
    title:string;
    imagePath?:string;
}) => {
    return (
        <div className={styles.block}>
            {
                <div className={styles.image}>
                    <img width="24" height="24" src={imagePath ? imagePath : `${_SERVER_API}/images/country/de/1`} alt="image" />
                </div>
            }
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}

export default Title