"use client"
import H2hItem from "../h2h/_components/H2hItem"
import CommandImage from "@/components/ui/command/CommandImage"
import { LiveOddsProps } from "@/lib/types/game-center"
import Text from "../h2h/_components/Text"
import styles from "./live-odds.module.scss"
import { _SERVER_API } from "@/lib/config/consts"


import Odds from "@/components/ui/odds/Odds"

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
                    <div className={`content-block__header ${(liveOdds?.cta_link && liveOdds?.bookie_id) ? "content-block__header-prediction" : ""}`}>
                        <p>Cuotas en vivo</p>
                        {
                            (liveOdds?.cta_link &&  liveOdds?.bookie_id) &&  <a className="static-game__block-link" target="_blank" href={liveOdds?.cta_link}>
                                <img
                                    src={`${_SERVER_API}/images/bookies/${liveOdds?.bookie_id}`}
                                    width={70} 
                                    height={32}
                                    alt="bookies"
                                />
                            </a>
                        }
                    </div>
                    <div className="content-block__body">
                        <div  className={`game-center__h2h ${styles.liveoddscontainer}`}>
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
                        <div className={styles.liveoddsblocks}>
                            {
                                liveOdds?.odds?.original && (
                                    <div className={styles.liveoddsblock}>
                                        <div className={`${styles.liveoddstitle} ${styles.live}`}>
                                            Cuotas en vivo
                                        </div>
                                        <div className={styles.liveoddsitems}>
                                            <Odds odds={liveOdds?.odds?.original}/>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                liveOdds?.odds?.live && (
                                    <div className={styles.liveoddsblock}>
                                        <div className={styles.liveoddstitle}>
                                            Cuotas antes de patido
                                        </div>
                                        <div className={`live-odds-items ${styles.liveoddsitems2}`}>
                                            
                                            <Odds odds={liveOdds?.odds?.live}/>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        {
                            liveOdds?.cta_link &&  <div className={styles.liveoddsbuttons}>
                                                        {
                                                            liveOdds?.cta_link && <a target="_blank" className={`${styles.liveoddsbutton} white-button`} href={liveOdds?.cta_link}>
                                                                                        Apostar ahora
                                                                                    </a>
                                                        }
                                                    </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}


export default LiveOddsBlock