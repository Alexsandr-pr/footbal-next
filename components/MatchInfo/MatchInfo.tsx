"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState, useEffect } from "react";

import EventHeader from "./components/event-header/EventHeader";
import EventItem from "./components/event-item/EventItem";
import Button from "../ui/buttons/Button";

import { MatchInfoProps } from "@/types/props/match";

import "./match-info.scss";


const MatchInfo = ({ games }: MatchInfoProps) => {
    const [show, setShow] = useState(true);
    const [block] = useAutoAnimate();
    const { country_id, name, id } = games;
    const isInternationl = games?.is_international;
    const show_country_flags = games?.show_country_flags;

    const [soundLocal, setSoundLocal] = useState<boolean>(true);

    useEffect(() => {
        const savedSound = localStorage.getItem(`soundLocal-${id}`);
        if (savedSound !== null) {
            setSoundLocal(JSON.parse(savedSound));
        }
    }, [id]);

    useEffect(() => {
        if (soundLocal === false) {
            localStorage.setItem(`soundLocal-${id}`, JSON.stringify(soundLocal));
        } else {
            localStorage.removeItem(`soundLocal-${id}`);
        }
    }, [soundLocal, id]);

    const toggleSoundLocal = () => {
        setSoundLocal(prev => !prev);
    };

    return (
        <div ref={block} className="item-event">
            <EventHeader
                soundLocal={soundLocal}
                toggleSoundLocal={toggleSoundLocal}
                leagueId={id}
                name={name}
                show={show}
                cb={() => setShow(prev => !prev)}
            />
            {show && (
                <div
                    style={{
                        borderTop: show ? "1px solid var(--border)" : "none",
                    }}
                    className="item-event__content">
                        {
                            games.games.map(game => {
                                return (
                                    <EventItem
                                        soundLocal={soundLocal}
                                        show_country_flags={show_country_flags}
                                        isInternationl={isInternationl}
                                        key={game.id}
                                        game={game}
                                        country_id={country_id}
                                        name={name}
                                    />
                                );
                            })
                        }
                    <div className="item-event__bottom">
                        <Button text="Sección de Europa League" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MatchInfo;
