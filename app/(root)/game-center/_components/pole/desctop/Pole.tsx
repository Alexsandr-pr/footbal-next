"use client";
import PoleCommand from "../pole-block-comand/PoleCommand";

import "./pole.scss";
import { useEffect, useRef } from "react";

import Player from "../player/Player";
import { PoleProps } from "@/types/game-center";

const PoleDesctop = ({
    teams,
    teamsLineups
} : PoleProps ) => {
    
    const elementTop = useRef<HTMLDivElement | null>(null);
    const elementBottom = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function createLine(element: HTMLElement | null) {
            if (!element) return;

            const lenght = 10;
            for(let i = 0; i < lenght; i++){
                const div = document.createElement("div");
                div.classList.add("span");
                div.style.left = `${i * 10}%`;
                if(element === elementTop.current && i === 0) {
                    div.classList.add("active-1");
                }
                element.appendChild(div);
            }
        }

        createLine(elementTop.current);
        createLine(elementBottom.current);
    }, []);

    return (
        <>
            <>
                <div className="pole__body pole-body">
                    <div ref={elementTop} className="pole-body__top-content">
                        <div data-pole className="pole-body__top">
                            {
                                teamsLineups[0].starting.map(player => {
                                    const {player_short_name, pitch_location, jersey_num, substitution, events} = player;
                                    return (
                                        <Player 
                                            events={events}
                                            substitution={substitution}
                                            key={player.name}
                                            top={true}
                                            jersey_num={jersey_num}
                                            styles={{
                                                left: `calc(${pitch_location.x}% - ${pitch_location.x === 0 ? "10px" : "70px"})`,
                                                top: `calc(${pitch_location.y}% - 25px)`
                                            }} 
                                            player_short_name={player_short_name}
                                        />
                                    )
                                })
                            }
                            <div className="pole-ds-left__block-1"></div>
                            <div className="pole-ds-left__block-2"></div>
                        </div>
                    </div>
                    <div ref={elementBottom} className="pole-body__bottom-content">
                        <div data-pole className="pole-body__bottom">
                            {
                                teamsLineups[0].starting.map(player => {
                                    const {player_short_name, pitch_location, jersey_num} = player;
                                    return (
                                        <Player 
                                            key={player.name}
                                            jersey_num={jersey_num}
                                            styles={{
                                                right: `calc(${pitch_location.x}% - ${pitch_location.x === 0 ? "10px" : "70px"})`,
                                                top: `calc(${pitch_location.y}% - 25px)`
                                            }} 
                                            player_short_name={player_short_name}
                                            />
                                        )
                                })
                            }
                            <div className="pole-ds-right__block-1"></div>
                            <div className="pole-ds-right__block-2"></div>
                        </div>
                    </div>
                </div>
            </>
            <div className="pole-ds__content pole-ds-content">
                <div className="pole-ds-content__command pole-ds-content__command-left">
                    <PoleCommand 
                        formation={teamsLineups[0].formation}
                        distanseOffset={"-2px"}
                        team={teams[0]}
                    />
                </div>
                <div className="pole-ds-content__command pole-ds-content__command-right">
                    <PoleCommand 
                        formation={teamsLineups[1].formation}
                        distanseOffset={"-2px"}
                        team={teams[1]}
                    />
                </div>
            </div> 
        </>
    )
}

export default PoleDesctop;
