"use client";

import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import Link from 'next/link';

import EventTime from '../event-time/EventTime';
import EventTeam from '../event-team/EventTeam';
import EventCof from '../event-cof/EventCof';
import EventGols from '../event-gols/EventGols';

import { EventItemProps } from '@/types/props/match';

import styles from "./item.module.scss";
import { useRouter } from 'next/navigation';
import { changeLeagueName } from '@/store/gameCenterSlice';

const EventItem = ({
    country_id,
    name,
    game,
    isInternationl,
    show_country_flags,
    soundLocal
}: EventItemProps) => {

    const router = useRouter();
    const dispatch = useDispatch();

    const [block] = useAutoAnimate();
    const coefficient = useSelector((state: RootState) => state.filter.coefficient);

    const {
        teams,
        game_time_to_display,
        start_time,
        status,
        penalties,
        description,
    } = game;

    const onSetId = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Останавливаем обычное поведение ссылки
        dispatch(changeLeagueName(name)); // Изменяем имя лиги
        router.push(`/game-center/${game.id}`); // Перенаправляем пользователя на нужный маршрут
    };

    return (
        <Link href={`/game-center/${game.id}`} onClick={onSetId} className={styles.item}>
            <div ref={block} className={styles.body}>
                <EventTime tv_networks={game?.tv_networks} gameTimeToDisplay={game_time_to_display} startTime={start_time} status={status} />
                <div className={styles.content}>
                    <EventTeam
                        soundLocal={soundLocal}
                        show_country_flags={show_country_flags}
                        isInternationl={isInternationl}
                        penalties={penalties}
                        status={status}
                        scores={game?.scores ?? []}
                        teams={teams}
                        description={description}
                    />
                    {game?.status.enum === 1 ? null : (
                        (teams[0]?.goals || teams[1]?.goals) && (
                            <EventGols goalsTeam2={teams[1]?.goals} goalsTeam1={teams[0]?.goals} />
                        )
                    )}
                    {game?.main_odds?.options && coefficient && (
                        <EventCof options={game?.main_odds?.options || []} />
                    )}
                </div>
            </div>
        </Link>
    );
};

export default EventItem;
