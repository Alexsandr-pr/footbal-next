import Description from "../ui/description/Description";
import Block from "../ui/block/Block";
import Parent from "../ui/parent/Parent";
import Result from "../ui/result/Result";
import StatusBlock from "../ui/status/Status";
import { Status } from "@/lib/types";
import Date from "../ui/date/Date";

const PostGCResult = (props: {
    scores?: [number, number] | [];
    status?: Status;
    redCards1: number;
    redCards2: number;
    penalties?: [number, number] | [];
    soundLocal?: boolean;
    description?:string;
    gameTime?:string;
    startTime?:string;
}) => {
    return (
        <Parent type="gc">
            <Date startTime={props.startTime} type="post"/>
            <Block>
                <Result
                    type="gc"
                    {...props}
                />
                <Description text={props.description}/>
            </Block>
            <StatusBlock statusName={props.status?.name}/>
        </Parent>
    )
}

export default PostGCResult