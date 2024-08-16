import MatchInfo from '@/components/MatchInfo/MatchInfo';

import CalendarioBottom from '../bottom/CalendarioBottom';
import { Calendar, League } from '@/types/home';

const Home = ({
    leagues,
    calendar,
} : {
    leagues: League[];
    calendar: Calendar | null;
}) => {

    return (
        <>
            <div className="flex-12">
                {
                    leagues.map(games => {
                        return <MatchInfo key={games.id} games={games} />
                    })
                }
            </div>
            {calendar && <CalendarioBottom calendar={calendar} />}
        </>
    );
}

export default Home;
