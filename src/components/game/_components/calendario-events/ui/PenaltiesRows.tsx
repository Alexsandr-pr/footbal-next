import { PenaltiesData } from "@/lib/types/game-center";
import Title from "./Title";
import CalendarioItemsContainer from "./CalendarioItemsContainer";
import CalendarioItem from "./CalendarioItem";
import Images from "./Images";




const PenaltiesRows = ({
    data
} : {
    data: PenaltiesData;
}) => {
    return (
        <>
            
            <div className="calendario-events__items-penalties-rows">
                {
                    data?.rows?.map(row => {
                        const eventLeft = row.events[0];
                        const eventRight = row.events[1]; 
                        
                        return (
                            <CalendarioItemsContainer key={row.time} clazz="calendario-events__items-penalties" styles={{borderBottom: "none"}}>
                                <CalendarioItem>
                                    <BlockJersey type="right" jerseyNum={eventLeft?.player_jersey_num}/>
                                    {eventLeft?.texts?.[0]?.split(" ").pop()}   
                                </CalendarioItem>
                                <CalendarioItem clazz="calendario-events__item-span">
                                    <Images type={eventLeft?.type}/>
                                    {row.time}
                                    {eventRight ? <Images type={eventRight.type}/> : <div style={{width:"24px", height:"24px"}} className="calendario-events__item-image"></div>}
                                </CalendarioItem>
                                <CalendarioItem styles={{justifyContent: "end"}}>
                                    {eventRight?.texts?.[0]?.split(" ").pop()}
                                    {eventRight && <BlockJersey jerseyNum={eventRight.player_jersey_num} />}
                                </CalendarioItem>
                            </CalendarioItemsContainer>
                            
                        )
                    })
                }
            </div>
            <Title scores={data.scores} name={data.name}/>
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