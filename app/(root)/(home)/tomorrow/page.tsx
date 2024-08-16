

import { LeaguesResponse } from '@/types/response';
import Home from '../_components/home/Home';
import { _SERVER_API } from '@/config/consts';

async function getData(): Promise<LeaguesResponse> {
    const res = await fetch(`${_SERVER_API}/games/tomorrow`, { next: { revalidate: 60 } });

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