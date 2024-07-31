import MatchInfo from '@/components/MatchInfo/MatchInfo';
import { Calendar, League } from '@/types/home';
import CalendarioBottom from '../bottom/CalendarioBottom';

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
