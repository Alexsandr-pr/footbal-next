import { Status } from "@/types";
import Result from "../ui/result/Result"
import Parent from "../ui/parent/Parent";
import StatusBlock from "../ui/status/Status";
import Description from "../ui/description/Description";
import Block from "../ui/block/Block";

const LiveGameResult = (props: {
    scores: number[];
    status?: Status;
    redCards1: number;
    redCards2: number;
    penalties?: [number, number] | [];
    soundLocal?: boolean;
    description?:string;
    gameTime?:string;
}) => {
    return (
        <Parent type="gc">
            <Block>
                <Result
                    type="gc"
                    {...props}
                />
                <Description text={props.description}/>
            </Block>
            <StatusBlock statusName={props?.status?.name}/>
        </Parent>
    )
}

export default LiveGameResult