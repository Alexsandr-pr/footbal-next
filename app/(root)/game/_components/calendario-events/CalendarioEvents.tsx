
import ContentBlock from "@/components/content-block/ContentBlock"
import "./calendario-events.scss"
import { PlayerEvent } from "@/types/game-center";
import PenaltiesRows from "./ui/PenaltiesRows";
import Rows from "./ui/Rows";



const CalendarioEvents = ({
    events
} : {
    events: {
        name: string;
        show_stage_title: boolean;
        is_penalties_stage: boolean;
        scores: [number, number];
        rows: {
            time: string;
            events: PlayerEvent[];
        }[];
    }[];
}) => {

    return (
        <ContentBlock title="CALENDARIO DE EVENTOS">
                <>
                    {
                        events.map((item) => {
                            if(item.is_penalties_stage) return <PenaltiesRows key={item.name} data={item}/>
                            return (
                                <Rows key={item.name} data={item}/>
                            )
                        })
                    }
                </>
        </ContentBlock>
    )
}


export default CalendarioEvents
