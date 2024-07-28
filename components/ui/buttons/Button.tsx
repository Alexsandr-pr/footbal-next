import { ChevronRight } from "lucide-react"
import "./button.scss";




const Button = () => {
    return (
        <button className="button">
            Sección de Europa League
            <ChevronRight height={16} width={16}/>
        </button>
    )
}

export default Button