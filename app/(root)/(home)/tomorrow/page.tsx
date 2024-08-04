
import { LeaguesResponse } from '@/types/home';
import Home from '../_components/home/Home';

async function getData(): Promise<LeaguesResponse> {
    const res = await fetch('https://www.sports-stats.net/games/tomorrow', { next: { revalidate: 60 } });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

async function Tomorrow() {
    const { leagues, calendar }: LeaguesResponse = await getData();
    
    return (
        <Home calendar={calendar}  leagues={leagues}/>
    );
}

export default Tomorrow