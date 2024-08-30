"use client"
import H2hItem from "../h2h/_components/H2hItem"
import CommandImage from "@/components/ui/command/CommandImage"
import { LiveOddsProps } from "@/types/game-center"
import Text from "../h2h/_components/Text"
import Odds from "@/components/odds/Odds"
import WhiteButton from "@/components/ui/buttons/button-white/WhiteButton"
import Image from "next/image"
import Link from "next/link"
import { _SERVER_API } from "@/config/consts"

import "./live-odds.scss";

const LiveOddsBlock = ({
    teams,
    showCountryFlags,
    liveOdds
} : LiveOddsProps) => {
    return (
        <>   
            {
                liveOdds?.odds?.original && liveOdds?.odds?.live &&
                <div  className="content-block">
                    <div className="content-block__header">
                        <p>Cuotas en vivo</p>
                        {
                            liveOdds?.cta_link && <Link className="static-game__block-link" target="_blank" href={liveOdds?.cta_link}>
                                <Image
                                    src={`${_SERVER_API}/images/bookies/${liveOdds?.bookie_id}`}
                                    width={70} 
                                    height={32}
                                    alt="bookies"
                                />
                            </Link>
                        }
                    </div>
                    <div className="content-block__body">
                        <div  className="game-center__h2h live-odds-container">
                            <H2hItem>
                                <CommandImage
                                    imagesStyles="h2h"
                                    position="right"
                                    showCountryFlags={showCountryFlags}
                                    teamId={teams[0].id}
                                    countryId={teams[0].country_id}
                                    teamName={teams[0].name}
                                />
                                <Text>1</Text>
                            </H2hItem>
                            <H2hItem>
                                X
                            </H2hItem>
                            <H2hItem>
                                <CommandImage
                                    imagesStyles="h2h"
                                    position="right"
                                    showCountryFlags={showCountryFlags}
                                    teamId={teams[1].id}
                                    countryId={teams[1].country_id}
                                    teamName={teams[1].name}
                                />
                                <Text>2</Text>
                            </H2hItem>
                        </div>
                        <div className="live-odds-blocks">
                            {
                                liveOdds?.odds?.original && (
                                    <div className="live-odds-block">
                                        <div className="live-odds-title live">
                                            Cuotas en vivo
                                        </div>
                                        <div className="live-odds-items">
                                            <Odds odds={liveOdds?.odds?.original}/>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                liveOdds?.odds?.live && (
                                    <div className="live-odds-block">
                                        <div className="live-odds-title ">
                                            Cuotas antes de patido
                                        </div>
                                        <div className="live-odds-items">
                                            
                                            <Odds odds={liveOdds?.odds?.live}/>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="live-odds-buttons">
                            {
                                liveOdds?.cta_link && <Link target="_blank" className="live-odds-button white-button" href={liveOdds?.cta_link}>
                                                            Apostar ahora
                                                        </Link>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


export default LiveOddsBlock