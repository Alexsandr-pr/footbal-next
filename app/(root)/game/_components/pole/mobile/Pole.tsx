
import PoleCommand from "../pole-block-comand/PoleCommand"

import "./pole.scss"
import { PoleProps } from "@/types/game-center";
import Formation from "../formation/Formation";

const PoleMobile = ({
    teams,
    teamsLineups,
    cb,
    activeTab
} : PoleProps) => {

    
    return (
        <>
            <div className="pole__content">
                <div className="pole-block-top">
                    <PoleCommand
                        formation={teamsLineups[0].formation}
                        team={teams[0]}
                    />
                </div>
                <div className="pole__body pole-body">
                    <div className="pole-body__top-content">
                        <div data-pole className="pole-body__top">
                            <Formation
                                stylesOption={3}
                                type={teamsLineups[0].team_num}
                                startingPlayers={teamsLineups[0].starting}
                            />
                            <PoleRectangle clazz="pole__rectanle-top"/> 
                        </div>
                    </div>
                    <div className="pole-body__bottom-content">
                        <div data-pole className="pole-body__bottom">
                            <Formation
                                stylesOption={4}
                                type={teamsLineups[1].team_num}
                                startingPlayers={teamsLineups[1].starting}
                            />
                            <PoleRectangle clazz="pole__rectanle-bottom"/> 
                        </div>
                    </div>
                    <span className="pole__rectangle-center"></span>
                    <span className="pole__rectangle-circle"></span>
                </div>
                <div className="pole-block-bottom">
                    <PoleCommand
                        formation={teamsLineups[1].formation}
                        team={teams[1]}
                    />
                </div>
            </div>
        </>
    )
}


const PoleRectangle = ({
    clazz
} : {
    clazz: string;
}) => {
    return (
        <span className={clazz}>
            <picture>
                <source media="(min-width:500px )" srcSet="/assets/game-center/Rectangle.svg" type="image/svg+xml"/>
                <img src="/assets/game-center/rectangle-mobile.svg" alt="image"/>
            </picture>
        </span>
    )
}
export default PoleMobile