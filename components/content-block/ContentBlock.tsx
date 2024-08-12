
import { ReactNode } from "react";
import Button from "../ui/buttons/Button";
import "./content-block.scss";

const ContentBlock = ({
    title, 
    buttonText,
    children
} : {
    title: string; 
    buttonText: string;
    children: ReactNode;
}) => {
    return (
        <div className="content-block">
            <div className="content-block__header">
                {title}
            </div>
            <div className="content-block__body">
                {
                    children
                }
            </div>
            <div className="content-block__bottom">
                <Button text={buttonText}/>
            </div>
        </div>
    )
}

export default ContentBlock