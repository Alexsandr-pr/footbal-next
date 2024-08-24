import { PenaltiesData } from "@/types/game-center";
import Title from "./Title";

function combineTeamEvents(data: PenaltiesData) {
    return data.rows.map((row) => {
        const [team1Event, team2Event] = row.events;
        return {
            time: row.time,
            events: [
                {
                    ...team1Event,
                },
                {
                    ...team2Event,
                },
            ],
        };
    });
}

const PenaltiesRows = ({
    data
} : {
    data: PenaltiesData;
}) => {
    const combinedRows = combineTeamEvents(data);
    return (
        <>
            <Title scores={data.scores} name={data.name}/>
            <div className="calendario-events__items-penalties-rows">
                {
                    combinedRows.map(item => {
                        return (
                            <div key={item.time} style={{borderBottom: "none"}} className="calendario-events__items calendario-events__items-penalties">
                                <div className="calendario-events__item">
                                    <div style={{color:"var(--white)", backgroundColor:"var(--green-hover)"}} className="calendario-events__item-num">
                                        {
                                            item.events[0].player_jersey_num
                                        }
                                    </div>
                                    {
                                        item.events[0].texts[0].split(" ").pop()
                                    }
                                    
                                </div>
                                <div className="calendario-events__item calendario-events__item-span">
                                    <img className="calendario-events__item-image" width={24} height={24} src={`https://sports-stats.net/images/games/event/${item.events[0].type}`} alt="" />
                                    {item.time}
                                    <img  className="calendario-events__item-image" width={24} height={24} src={`https://sports-stats.net/images/games/event/${item.events[1].type}`} alt="" />
                                </div>
                                <div style={{justifyContent: "end"}} className="calendario-events__item">
                                    {
                                        item.events[1].texts[0].split(" ").pop()
                                    }
                                    
                                    <div  style={{color:"var(--background)", backgroundColor:"#EEFFA5"}}  className="calendario-events__item-num">
                                        {
                                            item.events[1].player_jersey_num
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </>
    )
}

export default PenaltiesRows