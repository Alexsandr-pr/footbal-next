import "./page-layout.scss";
import { ReactNode } from "react";

const PageLayoutTable = ({
    childrenLeft,
    childrenRight
} : {
    childrenLeft: ReactNode;
    childrenRight: ReactNode;
}) => {
    return (
        <div className='dashboard__layout'>
            <div className="dashboard__layout-left">
                {childrenLeft}
            </div>
            <div className="dashboard__layout-right">
                {childrenRight}
            </div>
        </div>
    )
}

export default PageLayoutTable