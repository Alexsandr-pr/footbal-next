import { formatDateString } from "@/lib/utils";
// import "./date.scss";

const Date = ({
    startTime,
    type
} : {
    startTime?:string;
    type: "post" | "live" | "pre"
}) => {
    return (
        <div className={`date ${type}`}>
            {formatDateString(startTime)}
        </div>
    )
}

export default Date