
import Command from '@/components/ui/command/Command';
import EventResult from '../event-result/EventResult';


import styles from "./team.module.scss";
import { Team } from '@/types/home';
interface EventItemProps {
    status: {
        enum: number;
    };
    teams: Team[];
    scores: number[];
    country_id:string;
}
const EventTeam = ({teams, country_id, scores, status} : EventItemProps) => {
    
    return (
        <div className={`${styles.team} `}>
            <div className={`${styles.block} ${styles.left}`}>
                <Command country_id={country_id} team={teams[0]} imagesStyles="command-home" position='right'/>
            </div>
            
            <EventResult status={status} scores={scores}/>

            <div className={`${styles.block} ${styles.right}`}>
                <Command country_id={country_id} team={teams[1]}  reverse imagesStyles="command-home"  position='left'/>
            </div>
        </div>
    )
}

export default EventTeam