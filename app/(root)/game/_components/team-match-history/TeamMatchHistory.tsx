
import ContentBlock from "@/components/content-block/ContentBlock"
import "./team-match-history.scss"
import Command from "@/components/ui/command/Command"
import { TeamMatchHistoryProps } from "@/types/game-center"
import CommandHistoryResult from "@/components/command-history-result/CommandHistoryResult"

const TeamMatchHistory = ({
    teams,
    resentForm,
    showCountryFlags
} : TeamMatchHistoryProps) => {
    return (
        <ContentBlock size="average" title={"Recent form"}>
            <div className="team-match-history">
                <div className="team-match-history__block">
                    <div className="team-match-history__block-item">
                        <Command 
                            classes="team-match-history-column"
                            show_country_flags={showCountryFlags} 
                            imagesStyles="recent-form" 
                            reverse 
                            team={teams[0]}
                        />
                    </div>
                    <CommandHistoryResult data={resentForm.home}/>
                </div>
                <div className="team-match-history__block">
                    <CommandHistoryResult data={resentForm.away}/>
                    <div className="team-match-history__block-item">
                        <Command 
                            classes="team-match-history-column-reverse"
                            show_country_flags={showCountryFlags}
                            imagesStyles="recent-form" 
                            team={teams[1]}
                            />
                    </div>
                </div>       
            </div>
        </ContentBlock>
    )
}

export default TeamMatchHistory