import EventTime from '../event-time/EventTime';
import EventTeam from '../event-team/EventTeam';
import EventCof from '../event-cof/EventCof';

import styles from "./item.module.scss";
import { Game, Team, Goal } from '@/types/home';
import EventGols from '../event-gols/EventGols';

interface EventItemProps {
    teams: Team[];
    country_id: string;
    name: string;
    game: Game;
}

const EventItem = ({
    teams, 
    country_id, 
    name, 
    game
} : EventItemProps) => {
    const { main_odds} = game;
    const scores = game?.scores;

    const status = game?.status;

    const goalsTeam1 = teams[0]?.goals;
    const goalsTeam2 = teams[1]?.goals;

    // btw, didnt told you but the enum here:
    // 1=pre game
    // 2=live game
    // 3=post game
    // 1=предварительная игра
    // 2=живая игра
    // 3=пост-игра
    // Pre game - "Перед игрой": период перед началом матча, когда команды готовятся, проводятся разминки и предматчевые мероприятия.
    // Live game - "Игра в прямом эфире": активная фаза матча, когда команды играют, а матч транслируется в прямом эфире.
    // Post game - "После игры": период после завершения матча, когда проводится анализ игры, интервью с игроками и тренерами, а также обсуждаются результаты.

    return (
        <div className={styles.item}>
            <div className={styles.top}>
                {name}
            </div>
            <div className={styles.body}>
                <EventTime status={status}/>
                <div className={styles.content}>
                    <EventTeam status={status} scores={scores} country_id={country_id} teams={teams} />
                        {
                            status.enum === 1 ? null : (
                                (goalsTeam1 || goalsTeam2) && (
                                    <EventGols goalsTeam2={goalsTeam2} goalsTeam1={goalsTeam1} />
                                )
                            )
                        }
                    {main_odds?.options && (
                        <EventCof options={main_odds?.options || []} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventItem;