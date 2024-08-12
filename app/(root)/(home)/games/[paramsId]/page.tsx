
import { Suspense } from "react";
import { LeaguesResponse } from "@/types/home"; 
import Home from "../../_components/home/Home";
import Loading from "../../loading";
import { SERVER_API } from "@/config/consts";


async function getData(paramsId: string): Promise<LeaguesResponse> {
    const res = await fetch(`${SERVER_API}/games/${paramsId}`, {cache:"no-cache"});

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    
    return res.json();
}

interface PageProps {
    params: {
        paramsId: string;
    };
}

const GamePage = async ({ params }: PageProps) => {
    const { paramsId } = params;
    
    const { leagues, calendar } = await getData(paramsId);

    return (
        <Suspense fallback={<Loading />}>
            <Home calendar={calendar} leagues={leagues} />
        </Suspense>
        
    );
    
};

export default GamePage;
