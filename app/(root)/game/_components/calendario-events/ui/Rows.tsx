import React from 'react';
import NoAction from './NoAction';
import { PlayerEvent } from '@/types/game-center';
import Title from './Title';

const EventItem = ({ 
    event 
}: { 
    event: PlayerEvent
 }) => {
    const isReverse = event.team === 2;
    const eventText = event.texts.length > 1 ? (
        <div style={{ textAlign: isReverse ? "right" : "left" }} className="calendario-events__item-texts">
            {event.texts.map((text, index) => (
                <div key={text} className={index === 1 ? "calendario-events__item-texts-block" : ""}>
                    {text.split(" ").pop()}
                </div>
            ))}
        </div>
    ) : (
        <>{event.texts[0].split(" ").pop()}</>
    );

    return (
        <div key={event.time} style={{ flexDirection: isReverse ? "row-reverse" : "row" }} className="calendario-events__items">
            <div style={{ flexDirection: isReverse ? "row-reverse" : "row" }} className="calendario-events__item">
                <img
                    className="calendario-events__item-image"
                    width={24}
                    height={24}
                    src={`https://sports-stats.net/images/games/event/${event.type}`}
                    alt=""
                />
                {eventText}
            </div>
            <div className="calendario-events__item calendario-events__item-span">
                {event.time}
            </div>
        </div>
    );
};

const Row = ({ 
    row 
}: { 
    row: { 
        time: string; 
        events: PlayerEvent[] 
    }
}) => {
    return (
        <>
            {row.events.map(event => (
                <EventItem key={event.time} event={event} />
            ))}
        </>
    );
};

const Rows = ({ 
    data 
}: { 
    data: { 
        name: string; 
        show_stage_title: boolean; 
        is_penalties_stage: boolean; 
        scores: [number, number]; 
        rows: { time: string; 
            events: PlayerEvent[] 
        }[];
    } 
}) => {
    const { rows } = data;

    return (
        <>
            {
                data?.show_stage_title ? <Title scores={data.scores} name={data.name}/> : null
            }
            {rows.length > 0 ? rows.map((row, index) => (
                <Row key={index} row={row} />
            )) : <NoAction />}
        </>
    );
};

export default Rows;
