import ContentBlock from '@/components/content-block/ContentBlock'
import styles from "../missing-players/missing-player.module.scss"
import PlayerBlock from '../player/Player'
import { _SERVER_API } from '@/config/consts'
import { BenchProps } from '@/types/game-center'
import LineupsInfo from '@/components/lineups-info/LineupsInfo'

const Bench = ({
    bench,
    title
} : BenchProps) => {
    if(bench.length <= 0) {
        return null
    }
    return (
        <ContentBlock title={title}>
            <ul className={styles.list}>
                {
                    bench.map(({name, jersey_num, position, events, substitution}) => {
                        return (
                            <li key={name} className={styles.item}>
                                <PlayerBlock
                                    size='max'
                                    name={name}
                                    willPlayColor={"--white"}
                                    willPlay={position} 
                                    number={jersey_num}
                                />
                                <LineupsInfo substitution={substitution} events={events}/>
                            </li> 
                        )
                    })
                }
                
            </ul>
        </ContentBlock>
    )
}

export default Bench