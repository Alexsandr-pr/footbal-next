import React from 'react';
import NoAction from './NoAction';
import { EventsCalendario, PlayerEvent, Row } from '@/types/game-center';
import Title from './Title';
import CalendarioItemsContainer from './CalendarioItemsContainer';
import Images from './Images';
import CalendarioItem from './CalendarioItem';

const getEventText = (event: PlayerEvent, isReverse: boolean) => {
    return event.texts.length > 1 ? (
        <div style={{ textAlign: isReverse ? "right" : "left" }} className="calendario-events__item-texts">
            {
                event.texts.map((text, index) => (
                    <div key={text} style={{
                        color: (event.type === 15 && index === 1) ? "var(--live)" : ""
                    }} className={index === 1 ? "calendario-events__item-texts-block" : ""}>
                        {text.split(" ").pop()}
                    </div>
                ))
            }
        </div>
    ) : (
        <>{
            event.texts[0] && event.texts[0].split(" ").pop()
        }</>
    );
};

const EventItem = ({ 
    event 
}: { 
    event: PlayerEvent;
}) => {
    
    const isReverse = event.team === 2;
    const eventText = getEventText(event, isReverse);
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

    if(row.events.length === 2) {
        return (
            <CalendarioItemsContainer>
                <CalendarioItem>
                    <Images type={row.events[0].type}/>
                    {getEventText(row.events[0], false)}
                </CalendarioItem>
                <CalendarioItem clazz='calendario-events__item-span'>
                    {row.time}
                </CalendarioItem>
                <CalendarioItem>
                    {getEventText(row.events[1], true)}
                    <Images type={row.events[1].type}/>
                </CalendarioItem> 
            </CalendarioItemsContainer>
        )
    } else {
        return (
            <EventItem event={row.events[0]}/>
        );
    }
};

const Rows = ({ 
    data 
}: { 
    data: EventsCalendario; 
}) => {
    const { rows } = data;
    return (
        <div>
            {
                data?.show_stage_title ? <Title scores={data.scores} name={data.name}/> : null
            }
            <div className="events-items">
                {
                    rows.length > 0 ? rows.map((row, index) => {
                        return (
                            <RowBlock key={index} row={row} />
                        )
                    }) : <NoAction />
                }
            </div>
            
        </div>
    );
};

export default Rows;
