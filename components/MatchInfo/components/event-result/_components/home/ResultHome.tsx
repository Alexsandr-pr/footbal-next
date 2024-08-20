
import Result from "../ui/result/Result"
import Description from "../ui/description/Description"
import Parent from "../ui/parent/Parent"
import { Status } from "@/types";

const ResultHome = (props : {
    redCards1:number;
    redCards2: number;
    penalties?: [number, number] | [];
    description?: string ;
    soundLocal?: boolean;
    scores: number[] ;
    status: Status;
}) => {
    return (
        <Parent type="home">
            <Result
                {...props}
            />
            {props.description && <Description text={props.description}/>}
        </Parent>
    )
}

export default ResultHome