import "./command-history-result.scss";

const CommandHistoryResult = ({
    data
} : {
    data: number[];
}) => {
    return (
        <ul className="command-history-result">
            {
                data.map((item, index) => {
                    return (
                        <li key={index} className={`command-history-result__block 
                            ${ item === 0 ? "draw" : null}
                            ${ item === 1 ? "win" : null}
                            ${ item === 2 ? "loss" : null}
                        `}>
                            { item === 0 ? <div className="">E</div> : null}
                            { item === 1 ? <div className="">V</div> : null}
                            { item === 2 ? <div className="">D</div> : null}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CommandHistoryResult