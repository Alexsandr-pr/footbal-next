import { ReactNode } from "react";
import "./row.scss";


const Row = ({
    children
} : {
    children:ReactNode;
}) => {
    return (
        <tr className="table-row">
            {children}
        </tr>
    )
}

export default Row