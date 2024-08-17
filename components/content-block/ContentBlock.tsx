
import Button from "../ui/buttons/Button";

import { ContentBlockProps } from "@/types/props";

import "./content-block.scss";

const ContentBlock = ({
    title, 
    buttonText,
    children, 
} : ContentBlockProps) => {
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
            {
                buttonText &&  <div className="content-block__bottom">
                <Button text={buttonText}/>
            </div>
            }
        </div>
    )
}

export default ContentBlock