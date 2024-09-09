import Loading from '@/components/ui/loading/Loading';
import React from 'react'
import PoleBlock from '../_components/pole/pole-block/PoleBlock';
import SecondTab from '../_components/tabs/SecondTab';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';

const Lineups = () => {
    const data = useSelector((state:RootState) => state.gameCenter.data);
    const game = data?.game;
    
    if (!game || !data) return <Loading size={32} clazz="loading" />;
    console.log(game?.players?.lineups);

    return (
        <>
            <div className="lineups-pole-gc">
                {
                    game?.players?.lineups?.teams && <PoleBlock showCountryFlags={game?.league?.show_country_flags} teamsLineups={game?.players?.lineups.teams} teams={game?.teams}/>
                }
            </div>
            <>
                {
                    (game?.players?.missing_players || game?.players?.lineups?.teams) &&  <SecondTab showCountryFlags={game?.league?.show_country_flags} teamsLineups={game?.players?.lineups?.teams} teams={game?.teams} missingPlayers={game?.players?.missing_players}/>
                }
            </>
            
        </>
    )
}

export default Lineups