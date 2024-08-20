
import { PreGameProps } from "@/types/props/match";
import Description from "../ui/description/Description";
import Date from "../ui/date/Date";
import Status from "../ui/status/Status";
import Time from "../ui/time/Time";
import Parent from "../ui/parent/Parent";
import Block from "../ui/block/Block";

const PreGameGC = ({
    description,
    startTime,
    statusName
} : PreGameProps) => {
    return (
        <Parent type="gc">
            <Time startTime={startTime}/>
            <Block>
                <Date type="pre" startTime={startTime}/>
                <Description text={description}/>
            </Block>
            <Status statusName={statusName}/>
        </Parent>
        
    )
}

export default PreGameGC