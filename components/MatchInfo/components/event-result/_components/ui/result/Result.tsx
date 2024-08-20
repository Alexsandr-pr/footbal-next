import React from 'react';
import { Status } from "@/types";
import Penalties from "../penalties/Penalties";
import RedCards from "../red-cards/RedCards";
import Scores from "../scores/Scores";
import styles from "./result.module.scss";

const Result = ({
    redCards1,
    redCards2,
    penalties,
    status,
    scores,
    soundLocal,
    gameTime,
    type
}: {
    scores?: [number, number] | [];
    status?: Status;
    redCards1: number;
    redCards2: number;
    penalties?: [number, number] | [];
    soundLocal?: boolean;
    gameTime?: string;
    type?: "gc";
}) => {

    const maxRedCards = Math.max(redCards1, redCards2);
    const colorStyle = { 
        color: status?.enum === 2 ? "var(--live)" : "var(--white)", 
    };

    return (
        <div className={styles.block}>
            <div className={styles.number}>
                <RedCards position="left" redCards={redCards1} maxRedCards={maxRedCards}/>
                {penalties && penalties.length > 0 && penalties[0] !== undefined && <Penalties penalties={penalties[0]} />}
                {scores && scores.length > 0 && <Scores type={type} soundLocal={soundLocal} scores={scores[0]} statusEnum={status?.enum} />}
            </div>
            {(type === "gc" && status?.enum === 2) 
                ? <div className="live-minute-result-event">{gameTime}</div> 
                : <div style={colorStyle} className={styles.tire}>-</div>
            }
            <div className={styles.number}>
                {scores && scores.length > 1 && <Scores type={type} soundLocal={soundLocal} scores={scores[1]} statusEnum={status?.enum} />}
                {penalties && penalties.length > 1 && penalties[1] !== undefined && <Penalties penalties={penalties[1]} />}
                <RedCards redCards={redCards2} maxRedCards={maxRedCards}/>
            </div>
        </div>
    );
}
export default Result;
