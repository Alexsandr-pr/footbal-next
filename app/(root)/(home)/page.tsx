
import Home from "./_components/home/Home";
import { LeaguesResponse } from '@/types/home';

async function getData(): Promise<LeaguesResponse> {
    const res = await fetch('https://www.sports-stats.net/games/today');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


export default async function Page() {

    const { leagues }: LeaguesResponse = await getData();
    
    return (
        <Home leagues={leagues}/>
    );
}



