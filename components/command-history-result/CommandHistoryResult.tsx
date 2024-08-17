import "./command-history-result.scss";

const CommandHistoryResult = ({
    data
} : {
    data: number[];
}) => {
    return (
        <ul className="command-history-result">
            {
                data.map(item => {
                    return (
                        <li className={`command-history-result__block 
                            ${ item === 0 ? "draw" : null}
                            ${ item === 1 ? "win" : null}
                            ${ item === 2 ? "loss" : null}
                        `}>
                            { item === 0 ? "E" : null}
                            { item === 1 ? "V" : null}
                            { item === 2 ? "D" : null}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CommandHistoryResult