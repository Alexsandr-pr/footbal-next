"use client"
import { RootState } from "@/store/store";
import "./breadcrumbs.scss";
import { useSelector } from "react-redux";


const Breadcrumbs = ({
    commandFirst, 
    commandSecond
} : {
    commandFirst: string; 
    commandSecond: string;
}) => {
    const leagueName = useSelector((state:RootState) => state.gameCenter.leagueName)
    return (
        <div className="breadcrumbs">
            {/* <div className="breadcrumbs__item">
                {leagueName}
            </div> */}
            <div className="breadcrumbs__item">
                {commandFirst} vs. {commandSecond} 
            </div>
        </div>
    )
}

export default Breadcrumbs