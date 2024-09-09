


import { ContentBlockProps } from "@/lib/types/props";


import Button from "../buttons/Button";

const ContentBlock = ({
    title, 
    buttonText,
    children, 
    cb,
    rotate,
    buttonColor,
    size,
    styles,
    border
} : ContentBlockProps) => {

    return (
        <div  className={`content-block ${size} ${border ? "border" : ""}`}>
            {
                title && <div style={styles} className="content-block__header ">
                    <p>{title}</p>
                </div>
            }
            <div className="content-block__body">
                {
                    children
                }
            </div>
            {
                buttonText &&  <div className="content-block__bottom">
                    <Button buttonColor={buttonColor} cb={cb} rotate={rotate} text={buttonText}/>
                </div>
            }
        </div>
    )
}

export default ContentBlock