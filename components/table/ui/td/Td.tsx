import { ReactNode } from "react";
import "./td.scss";

const Td = ({
    children,
    isBold,
    border,
    type,
    maxW
} : {
    isBold?:boolean;
    children:ReactNode;
    border?:string;
    type?: "team" | "start";
    maxW?: string;
}) => {
    return (
        <td className={`table-td-col ${isBold ? "bold" : null} ${border ? border : ""} ${type === "team" ? type: null} ${type === "start" ? type : null} ${maxW}`}>
            {children}
        </td>
    )
}

export default Td