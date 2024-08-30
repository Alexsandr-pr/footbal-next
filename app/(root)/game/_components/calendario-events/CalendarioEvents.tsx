
import ContentBlock from "@/components/content-block/ContentBlock"
import "./calendario-events.scss"

import PenaltiesRows from "./ui/PenaltiesRows";
import Rows from "./ui/Rows";
import {  CalendarioEventsProps } from "@/types/game-center";

const CalendarioEvents = ({
    events
} : CalendarioEventsProps) => {
    
    if(!events) return null
    return (
        <ContentBlock styles={{borderBottom:"none"}} size='min' title="CALENDARIO DE EVENTOS">
            <div className="events-items">
                {
                    events && events?.map((item) => {
                        if(item.is_penalties_stage) return <PenaltiesRows key={item.name} data={item}/>
                        
                        return (
                            <Rows key={item.name} data={item}/>
                        )
                    })
                }
            </div>
        </ContentBlock>
    )
}


export default CalendarioEvents
