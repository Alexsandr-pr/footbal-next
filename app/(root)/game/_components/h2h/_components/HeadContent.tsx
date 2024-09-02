import H2hItem from './H2hItem';
import { Blockh2hHeadContentProps} from '@/types/game-center';
import Text from './Text';
import { formatDateStringSecond } from '@/lib/utils';


const HeadContent = ({headToHead, teamsTop} : Blockh2hHeadContentProps) => {
    
    return (
        <>
            {
                headToHead.games.map(({teams,winner,id,scores, start_time}) => {
                    const indexTeam1 = teamsTop.findIndex(team => team.id === teams[0].id);
                    const indexTeam2 = teamsTop.findIndex(team => team.id === teams[1].id);

                    const firstTeam = indexTeam1 < indexTeam2 ? teams[0] : teams[1];
                    const secondTeam = indexTeam1 < indexTeam2 ? teams[1] : teams[0];
                    const firstScore = indexTeam1 < indexTeam2 ? scores[0] : scores[1];
                    const secondScore = indexTeam1 < indexTeam2 ? scores[1] : scores[0];

                    return (
                        <div className="game-center__h2h" key={start_time}>
                            <H2hItem clazz={`h2h-item-left ${firstScore < secondScore || winner === -1 ? 'opacity' : null}`}>
                                <Text>{firstTeam.name}</Text>
                            </H2hItem>
                            <H2hItem>
                                <div className="h2h-gc-block-result">
                                    <div className="h2h-league-name">
                                        Copa de la Liga
                                    </div>
                                    <div className="h2h-numbers">
                                        <div className={`h2h-number ${firstScore < secondScore || winner === -1 ? 'opacity' : null}`}>
                                            <span>{firstScore}</span>
                                        </div>
                                        <img
                                            src="/assets/icons/tire.svg"
                                            className={`h2h-image ${winner === -1 ? 'opacity' : null}`}
                                            width={11}
                                            height={19}
                                            alt="tire"
                                        />
                                        <div className={`h2h-number ${secondScore < firstScore || winner === -1 ? 'opacity' : null}`}>
                                            <span>{secondScore}</span>
                                        </div>
                                    </div>
                                    <div className="h2h-date">
                                        {formatDateStringSecond(start_time)}
                                    </div>
                                </div>
                            </H2hItem>
                            <H2hItem clazz={`h2h-item-right ${secondScore < firstScore || winner === -1 ? 'opacity' : null}`}>
                                <Text>{secondTeam.name}</Text>
                            </H2hItem>
                        </div>
                    );
                })
            }
        </>
    )
}

export default HeadContent