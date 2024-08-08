"use client"
import EventTime from '../event-time/EventTime';
import EventTeam from '../event-team/EventTeam';
import EventCof from '../event-cof/EventCof';
import styles from "./item.module.scss";
import { Game, Team } from '@/types/home';
import EventGols from '../event-gols/EventGols';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

interface EventItemProps {
    teams: Team[];
    country_id: string;
    name: string;
    game: Game;
    isInternationl: boolean;
    show_country_flags: boolean;
    soundLocal: boolean;
}

const EventItem = ({
    teams,
    country_id,
    name,
    game,
    isInternationl,
    show_country_flags,
    soundLocal
}: EventItemProps) => {
    const { main_odds } = game;
    
    const scores = game?.scores ?? [];
    const penalties = game?.penalties;
    const description = game?.description;

    const startTime = game.start_time;
    const status = game?.status;
    const goalsTeam1 = teams[0]?.goals;
    const goalsTeam2 = teams[1]?.goals;
    
    const [block] = useAutoAnimate()

    const coefficient = useSelector((state : RootState) => state.filter.coefficient);
    
    return (
        <div className={styles.item}>
            <div ref={block} className={styles.body}>
                <EventTime gameTimeToDisplay={game.game_time_to_display} startTime={startTime} status={status} />
                <div className={styles.content}>
                    <EventTeam 
                        soundLocal={soundLocal}
                        show_country_flags={show_country_flags}
                        isInternationl={isInternationl} 
                        penalties={penalties} 
                        status={status} 
                        scores={scores} 
                        country_id={country_id}
                        teams={teams} 
                        description={description}
                    />
                    {
                        status.enum === 1 ? null : (
                            (goalsTeam1 || goalsTeam2) && (
                                <EventGols goalsTeam2={goalsTeam2} goalsTeam1={goalsTeam1} />
                            )
                        )
                    }
                    {main_odds?.options && coefficient && (
                        <EventCof options={main_odds?.options || []} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventItem;
