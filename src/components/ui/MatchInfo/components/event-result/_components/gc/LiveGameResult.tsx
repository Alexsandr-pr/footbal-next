import { Status } from "@/lib/types";

import Parent from "../ui/parent/Parent";
import StatusBlock from "../ui/status/Status";
import Description from "../ui/description/Description";
import Block from "../ui/block/Block";
import styles from "../ui/result/result.module.scss";
import RedCards from "../ui/red-cards/RedCards";
import Scores from "../ui/scores/Scores";
import Penalties from "../ui/penalties/Penalties";

const LiveGameResult = (props: {
    scores?: [number, number] | [];
    status?: Status;
    redCards1: number;
    redCards2: number;
    penalties?: [number, number] | [];
    soundLocal?: boolean;
    description?:string;
    gameTime?:string;
}) => {
    const maxRedCards = Math.max(props?.redCards1, props?.redCards2);
    
    return (
        <Parent type="gc">
            <Block time={new Date().toLocaleTimeString()}>
                <div className={styles.block}>
                <div className={styles.number}>
                    <RedCards position="left" redCards={props?.redCards1} maxRedCards={maxRedCards}/>
                    {props?.penalties && props?.penalties.length > 0 && props?.penalties[0] !== undefined && <Penalties penalties={props?.penalties[0]} />}
                    {props?.scores && props?.scores.length > 0 && <Scores type="gc" soundLocal={props?.soundLocal} scores={props?.scores[0]} statusEnum={props?.status?.enum} />}
                </div>
                
            
                    <div className="live-minute-result-event">{props?.gameTime}</div> 
                    
                
                <div className={styles.number}>
                    {props?.scores && props?.scores.length > 1 && <Scores type="gc" soundLocal={props?.soundLocal} scores={props?.scores[1]} statusEnum={props?.status?.enum} />}
                    {props?.penalties && props?.penalties.length > 1 && props?.penalties[1] !== undefined && <Penalties penalties={props?.penalties[1]} />}
                    <RedCards redCards={props?.redCards2} maxRedCards={maxRedCards}/>
                </div>
            </div>
                <Description text={props.description}/>
            </Block>
            <StatusBlock statusName={props?.status?.name}/>
        </Parent>
    )
}

export default LiveGameResult