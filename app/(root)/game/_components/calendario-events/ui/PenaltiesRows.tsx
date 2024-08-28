import { PenaltiesData } from "@/types/game-center";
import Title from "./Title";
import CalendarioItemsContainer from "./CalendarioItemsContainer";
import CalendarioItem from "./CalendarioItem";
import Images from "./Images";


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
                            <CalendarioItemsContainer key={item.time} clazz="calendario-events__items-penalties" styles={{borderBottom: "none"}}>
                                <CalendarioItem>
                                    <BlockJersey type="right" jerseyNum={item.events[0].player_jersey_num}/>
                                    
                                    {
                                        item.events[0].texts && item.events[0].texts[0].split(" ").pop()
                                    }   
                                </CalendarioItem>
                                <CalendarioItem clazz="calendario-events__item-span">
                                    <Images type={item.events[0].type}/>
                                    {item.time}
                                    <Images type={item.events[1].type}/>
                                </CalendarioItem>
                                <CalendarioItem styles={{justifyContent: "end"}}>
                                    {
                                        item.events[1].texts && item.events[1].texts[0].split(" ").pop()
                                    }
                                    <BlockJersey jerseyNum={item.events[1].player_jersey_num} />
                                </CalendarioItem>
                            </CalendarioItemsContainer>
                            
                        )
                    })
                }
            </div>
        </>
    )
}

const BlockJersey = ({
    jerseyNum,
    type
} : {
    jerseyNum?: number;
    type?: "right"
}) => {
    let styles = {color:"var(--background)", backgroundColor:"#EEFFA5"};
    if(type === "right") {
        styles = {color:"var(--white)", backgroundColor:"var(--green-hover)"};
    }
    return (
        <div  style={styles}  className="calendario-events__item-num">
            {
                jerseyNum
            }
        </div>
    )
}

export default PenaltiesRows