import Command from "@/components/ui/command/Command"
import { PoleCommandProps } from "@/lib/types/game-center";

import styles from  "./pole-block-comand.module.scss"

const PoleCommand = ({
    team,
    distanseOffset,
    formation,
    showCountryFlags
} : PoleCommandProps) => {
    
    return (
        <div className={styles.pole__blockcomand}>
            <Command
                distanseOffset={distanseOffset}
                classes={styles.pole__comandname}
                reverse={true}
                show_country_flags={showCountryFlags}
                position="right"
                team={team}
                imagesStyles={"commandGameCenter"}
            />
            <div className={styles.pole__disposition}>{formation}</div>
        </div>
    )
}

export default PoleCommand