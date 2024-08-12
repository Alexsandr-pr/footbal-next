import "./breadcrumbs.scss";

const Breadcrumbs = ({
    commandFirst, 
    commandSecond
} : {
    commandFirst: string; 
    commandSecond: string;
}) => {
    return (
        <div className="breadcrumbs">
            {commandFirst} vs. {commandSecond} 
        </div>
    )
}

export default Breadcrumbs