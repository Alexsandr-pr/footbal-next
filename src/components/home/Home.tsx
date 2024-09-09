

import { Calendar, League } from '@/lib/types/home';
import MatchInfo from '../ui/MatchInfo/MatchInfo';
import CalendarioBottom from './bottom/CalendarioBottom';
import Layout from './Layout';


const Home = ({
    leagues,
    calendar,
} : {
    leagues: League[];
    calendar: Calendar | null;
}) => {
    return (

        <Layout>
            <div className="flex-12">
                {
                    leagues.map(games => {
                        return <MatchInfo key={games.id} games={games} />
                    })
                }
            </div>
            {calendar && <CalendarioBottom calendar={calendar} />}
        </Layout>
    );
}

export default Home;
