import { getGridStyle } from "@/lib/utils";
import styles from "./red.module.scss";

const RedCards = ({
    redCards,
    maxRedCards,
    position
} : {
    redCards: number;
    maxRedCards:number;
    position?: "left";
}) => {
    return (
        <div style={getGridStyle(maxRedCards)} className={`${styles.gol} ${position === "left" ? "mr-75" : "ml-75"}`}>
            {RenderGoals(redCards, maxRedCards)}
        </div>
    )
}


const RenderGoals = (count: number, maxCount: number) => {
    return Array.from({ length: maxCount }).map((_, index) => (
        <span
            key={index}
            className={`${styles.ball} ${index < count ? styles.visible : styles.hidden}`}
        ></span>
    ));
};



export default RedCards