import { ReactNode } from "react";
import "./td.scss";

const Td = ({
    children,
    isBold,
    border,
    type,
    maxW,
    team,
    className
} : {
    isBold?: string | boolean;
    children:ReactNode;
    border?:string;
    type?: string;
    maxW?: string;
    team?: string;
    className?:string;
}) => {
    return (
        <td className={`table-td-col ${isBold} ${border} ${team} ${type} ${maxW} ${className}`}>
            {children}
        </td>
    )
}

export default Td