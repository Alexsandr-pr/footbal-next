
import CommandHistoryResult from "@/components/ui/command-history-result/CommandHistoryResult"
import styles from  "./team-match-history.module.scss"
import Command from "@/components/ui/command/Command"
import ContentBlock from "@/components/ui/content-block/ContentBlock"
import { TeamMatchHistoryProps } from "@/lib/types/game-center"


const TeamMatchHistory = ({
    teams,
    resentForm,
    showCountryFlags
} : TeamMatchHistoryProps) => {

    if(!teams || !resentForm || !showCountryFlags) return null
    return (
        <ContentBlock size="average" title={"Recent form"}>
            <div className={styles.teammatchhistory}>
                <div className={styles.teammatchhistoryblock}>
                    <div className={styles.teammatchhistoryblockitem}>
                        {teams && <Command 
                            classes={styles.teammatchhistorycolumn}
                            show_country_flags={showCountryFlags} 
                            imagesStyles="recent-form" 
                            reverse 
                            team={teams[0]}
                        />}
                    </div>
                    {
                        resentForm &&  <CommandHistoryResult data={resentForm.home}/>
                    }
                </div>
                <div className={styles.teammatchhistoryblock}>
                {resentForm && <CommandHistoryResult data={resentForm.away}/>}
                    <div className={styles.teammatchhistoryblockitem}>
                        {teams && <Command 
                            classes={styles.teammatchhistorycolumnreverse}
                            show_country_flags={showCountryFlags}
                            imagesStyles="recent-form" 
                            team={teams[1]}
                            />}
                    </div>
                </div>       
            </div>
        </ContentBlock>
    )
}

export default TeamMatchHistory