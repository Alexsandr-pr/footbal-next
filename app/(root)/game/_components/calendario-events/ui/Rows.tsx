import React from 'react';
import NoAction from './NoAction';
import { EventsCalendario, PlayerEvent, Row } from '@/types/game-center';
import Title from './Title';
import CalendarioItemsContainer from './CalendarioItemsContainer';
import Images from './Images';
import CalendarioItem from './CalendarioItem';

const EventItem = ({ 
    event 
}: { 
    event: PlayerEvent;
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
        <CalendarioItemsContainer styles={{ flexDirection: isReverse ? "row-reverse" : "row" }}>
            <CalendarioItem styles={{ flexDirection: isReverse ? "row-reverse" : "row" }}>
                <Images type={event.type}/>
                {eventText}
            </CalendarioItem>
            <CalendarioItem clazz='calendario-events__item-span'>
                {event.time}
            </CalendarioItem>
        </CalendarioItemsContainer>
    );
};

const RowBlock = ({ 
    row 
}: { 
    row: Row
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
    data: EventsCalendario; 
}) => {
    const { rows } = data;

    return (
        <>
            {
                data?.show_stage_title ? <Title scores={data.scores} name={data.name}/> : null
            }
            {rows.length > 0 ? rows.map((row, index) => (
                <RowBlock key={index} row={row} />
            )) : <NoAction />}
        </>
    );
};

export default Rows;
