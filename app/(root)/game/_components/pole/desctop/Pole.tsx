"use client";
import PoleCommand from "../pole-block-comand/PoleCommand";

import "./pole.scss";
import { useEffect, useRef } from "react";

import { PoleProps } from "@/types/game-center";
import Formation from "../formation/Formation";

const PoleDesctop = ({
    teams,
    teamsLineups,
    showCountryFlags
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
                            <Formation
                                stylesOption={1}
                                type={teamsLineups[0].team_num}
                                startingPlayers={teamsLineups[0].starting}
                            />
                            <div className="pole-ds-left__block-1"></div>
                            <div className="pole-ds-left__block-2"></div>
                        </div>
                    </div>
                    <div ref={elementBottom} className="pole-body__bottom-content">
                        <div data-pole className="pole-body__bottom">
                            <Formation
                                stylesOption={2}
                                type={teamsLineups[1].team_num}
                                startingPlayers={teamsLineups[1].starting}
                            />
                            <div className="pole-ds-right__block-1"></div>
                            <div className="pole-ds-right__block-2"></div>
                        </div>
                    </div>
                </div>
            </>
            <div className="pole-ds__content pole-ds-content">
                <div className="pole-ds-content__command pole-ds-content__command-left">
                    <PoleCommand 
                        showCountryFlags={showCountryFlags}
                        formation={teamsLineups[0].formation}
                        distanseOffset={"-2px"}
                        team={teams[0]}
                    />
                </div>
                <div className="pole-ds-content__command pole-ds-content__command-right">
                    <PoleCommand 
                        showCountryFlags={showCountryFlags}
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
