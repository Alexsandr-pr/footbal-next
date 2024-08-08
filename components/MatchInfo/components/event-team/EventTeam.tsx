import Command from '@/components/ui/command/Command';
import EventResult from '../event-result/EventResult';

import { Team } from '@/types/home';

import styles from "./team.module.scss";

interface EventItemProps {
    isInternationl: boolean;
    status: {
        enum: number;
    };
    teams: Team[];
    scores: number[];
    country_id: string;
    penalties?: [number, number] | [];
    description?:string;
    show_country_flags?:boolean;
    soundLocal:boolean;
}

const EventTeam = ({
    teams,
    country_id,
    scores,
    status,
    isInternationl,
    penalties,
    description,
    show_country_flags,
    soundLocal
}: EventItemProps) => {

    const redCards1 = teams[0]?.red_cards ?? 0;
    const redCards2 = teams[1]?.red_cards ?? 0;

    return (
        <div className={`${styles.team} `}>
            <div className={`${styles.block} ${styles.left}`}>
                <Command show_country_flags={show_country_flags} isInternationl={isInternationl}  team={teams[0]} imagesStyles="command-home" position='right' />
            </div>
            <EventResult
                soundLocal={soundLocal}
                penalties={penalties}
                redCards1={redCards1}
                redCards2={redCards2}
                status={status}
                scores={scores}
                description={description}
            />
            <div className={`${styles.block} ${styles.right}`}>
                <Command show_country_flags={show_country_flags} isInternationl={isInternationl}  team={teams[1]} reverse imagesStyles="command-home" position='left' />
            </div>
        </div>
    )
}

export default EventTeam;
