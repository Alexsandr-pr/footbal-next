import ContentBlock from "@/components/content-block/ContentBlock"
import "./calendario-events.scss"
import { PlayerEvent } from "@/types/game-center";
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
                            return (
                                <>
                                    <div key={item.name} className="calendario-events-title">
                                        <div className="calendario-events-title-block">{item.scores[0]}</div>
                                        <span>{item.name}</span>
                                        <div className="calendario-events-title-block">{item.scores[1]}</div>
                                    </div>
                                    <>
                                        {
                                            
                                            item.rows.length > 0 ? item.rows.map(item => {
                                                return (
                                                    <>
                                                        {
                                                            item.events.map(item => {
                                                                return (
                                                                    <div key={item.time} style={{flexDirection: item.team === 2 ? "row-reverse" : "row"}} className="calendario-events__items">
                                                                        <div style={{flexDirection: item.team === 2 ? "row-reverse" : "row"}}  className="calendario-events__item">
                                                                            <img width={24} height={24} src={`https://sports-stats.net/images/games/event/${item.type}`} alt="" />
                                                                            <>
                                                                                {
                                                                                    item.texts.length > 1 ? <>
                                                                                    <div style={{textAlign: item.team === 2 ? "right" : "left"}} className="calendario-events__item-texts">
                                                                                        {
                                                                                            item.texts.map((item, index) => {
                                                                                                return (
                                                                                                    <div key={item} className={index === 1 ? "calendario-events__item-texts-block" : ""}>
                                                                                                        {item}
                                                                                                    </div>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </div>
                                                                                    
                                                                                    </> : <>{item.texts}</>
                                                                                }
                                                                            </>
                                                                        </div>
                                                                        <div className="calendario-events__item calendario-events__item-span">
                                                                            {item.time}
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })  
                                                        }
                                                    </>
                                                )
                                            }) : 
                                            <div style={{justifyContent: "center"}} className="calendario-events__items ">
                                                <div className="calendario-events__item-none">
                                                    No any actions
                                                </div>
                                            </div>
                                        }
                                    </>
                                </>
                            )
                        })
                    }
                </>
            
        </ContentBlock>
    )
}

export default CalendarioEvents