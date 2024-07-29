"use client";
import EventHeader from "./components/event-header/EventHeader";
import EventItem from "./components/event-item/EventItem";
import Button from "../ui/buttons/Button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./match-info.scss"
import { League } from "@/types/home";
import { useState } from "react";

interface MatchInfoProps {
    games: League; 
}

const MatchInfo = ({games} : MatchInfoProps) => {
    const [show, setShow] = useState(true);
    const [block] = useAutoAnimate()
    const {country_id, name, id } = games;
    const isInternationl = games?.is_international;

    return (
        <div ref={block}  className="item-event">
            <EventHeader leagueId={id} name={name} show={show} cb={() => setShow(prev => !prev)}/>
            {
                show && (<div style={{borderTop: show ? "1px solid var(--border)" : "none"}}  className="item-event__content">
                            {
                                games.games.map(game => {
                                    return ( 
                                        <EventItem isInternationl={isInternationl} key={game.id} game={game} country_id={country_id} name={name} teams={game.teams}/>
                                    )
                                })
                            }
                            <div className="item-event__bottom">
                                <Button/>
                            </div>
                        </div>)
            }
        </div>
    );
}



export default MatchInfo;
