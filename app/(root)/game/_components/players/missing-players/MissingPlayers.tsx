import ContentBlock from '@/components/content-block/ContentBlock'
import {  MissingPlayersProps } from '@/types/game-center'
import styles from "./missing-player.module.scss";
import { _SERVER_API } from '@/config/consts';
import Player from '../player/Player';

const MissingPlayers = ({
    missingPlayers
} : MissingPlayersProps) => {
    
    if(missingPlayers.length === 0) {
        return null
    }

    return (
        <ContentBlock size='max' title='LESIONES Y SUSPENSIONES'>
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
                                    <img
                                        width={14} 
                                        height={14} 
                                        src={`${_SERVER_API}/images/games/lineups/missing/${missing_details.type}`}  
                                        alt="missing_details"
                                    />
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