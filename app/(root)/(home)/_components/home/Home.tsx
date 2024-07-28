import MatchInfo from '@/components/MatchInfo/MatchInfo';
import { League } from '@/types/home';


const Home = ({
    leagues,
} : {
    leagues: League[];
}) => {

    return (
        <>
            <div className="flex-12">
                {
                    leagues.map(games => {
                        return  <MatchInfo key={games.id} games={games}/>
                    })
                }
            </div>
        </>
    )
}

export default Home