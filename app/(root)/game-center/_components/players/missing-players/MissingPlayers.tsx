import ContentBlock from '@/components/content-block/ContentBlock'
import { MissingPlayer } from '@/types/game-center'
import React from 'react'
import styles from "./missing-player.module.scss";

import { _SERVER_API } from '@/config/consts';
import Player from '../player/Player';

const MissingPlayers = ({
    missingPlayers
} : {
    missingPlayers: MissingPlayer[];
}) => {
    
    if(missingPlayers.length === 0) {
        return null
    }

    return (
        <ContentBlock title='LESIONES Y SUSPENSIONES'>
            <ul className={styles.list}>
                {
                    missingPlayers.map(({name, missing_details, jersey_num}) => {
                        return (
                            <li key={name} className={styles.item}>
                                <Player
                                    name={name}
                                    willPlayColor={missing_details?.will_play_status === 2 ? "--live" : "--yellow"}
                                    willPlay={missing_details?.will_play} 
                                    number={jersey_num}
                                />
                                <div className={styles.right}>
                                    <p className={styles.text}>{missing_details?.reason}</p>
                                    <img width={14} height={14} src={`${_SERVER_API}/images/games/lineups/missing/${missing_details.type}`}  alt="" />
                                </div>
                            </li>
                        )
                    })
                }
                
            </ul>
        </ContentBlock>
    )
}

export default MissingPlayers