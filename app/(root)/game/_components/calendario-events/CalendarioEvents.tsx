"use client";
import ContentBlock from "@/components/content-block/ContentBlock"
import PenaltiesRows from "./ui/PenaltiesRows";
import Rows from "./ui/Rows";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import "./calendario-events.scss"

const CalendarioEvents = () => {
    const data = useSelector((state:RootState) => state.gameCenter.data);
    const game = data?.game;

    if(!game?.events) return null
    return (
        <ContentBlock styles={{borderBottom:"none"}} size='min' title="CALENDARIO DE EVENTOS">
            
            <div className="events-items">
                <div className="calendario-events-title calendario-events-title-bottom">
                    <span>INICIO DEL JUEGO</span>
                </div>
                {
                    game?.events && game?.events?.map((item) => {
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
