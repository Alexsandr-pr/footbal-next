import { ReactNode } from "react";

const Td = ({
    children,
    isBold,
    border,
    type,
    maxW,
    team,
    className,
    colSpan
} : {
    isBold?: string | boolean;
    children:ReactNode;
    border?:string;
    type?: string;
    maxW?: string;
    team?: string;
    className?:string;
    colSpan?:number;
}) => {
    return (
        <td  colSpan={colSpan ?? colSpan} className={`table-td-col 
            ${isBold ? isBold : ""} 
            ${border ? border : ""} 
            ${team ? team : ""} 
            ${type ? type : ""} 
            ${maxW ? maxW : ""} 
            ${className ? className : ""}`}
        >
            {children}
        </td>
    )
}

export default Td