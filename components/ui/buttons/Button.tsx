"use client"
import { ChevronRight } from "lucide-react"
import "./button.scss";


const Button = ({
    text,
    cb,
    rotate
} : {
    cb?:() => void;
    text: string;
    rotate?: string;
}) => {
    return (
        <button onClick={cb} className="button">
            {
                text
            }
            <ChevronRight style={{transform: rotate ? `rotate(${rotate})` : `rotate(0deg)`, transition: "all .3s easy "}} height={16} width={16}/>
        </button>
    )
}

export default Button