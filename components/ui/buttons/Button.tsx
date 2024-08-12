import { ChevronRight } from "lucide-react"
import "./button.scss";




const Button = ({
    text
} : {
    text: string
}) => {
    return (
        <button className="button">
            {
                text
            }
            <ChevronRight height={16} width={16}/>
        </button>
    )
}

export default Button