import MatchInfo from "@/components/MatchInfo/MatchInfo";
import MainHeaderBlock from "./_components/main-header-block/MainHeaderBlock";
import Reclama from "./_components/reclama/Reclama";
import "./home.scss";

import { LeaguesResponse } from '@/types/home';

async function getData(): Promise<LeaguesResponse> {
    const res = await fetch('https://www.sports-stats.net/games/yesterday');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


export default async function Home() {

    const { leagues }: LeaguesResponse = await getData();
    
    return (
        <div className="">
            <MainHeaderBlock/>
            <Reclama/>
            <div className="flex-12">
                {
                    leagues.map(games => {
                        return  <MatchInfo key={games.id} games={games}/>
                    })
                }
            </div>
        </div>
    );
}



