
import { MissingPlayer } from "@/types/game-center"
import MissingPlayers from "../missing-players/MissingPlayers"


const SecondTab = ({
    missingPlayers
} : {
    missingPlayers?: [MissingPlayer[],MissingPlayer[]];
}) => {

    return (
        <div className="flex-16">
            {
                missingPlayers?.[0] && <MissingPlayers missingPlayers={missingPlayers[0]}/>
            }
            {
                missingPlayers?.[0] && <MissingPlayers missingPlayers={missingPlayers[1]}/>
            }
        </div>
    )
}

export default SecondTab