import React, { ReactNode } from 'react'
import { _SERVER_API } from "@/config/consts";
import { GameCenterResponse } from "@/types/response";
import ClientComponent from '../_components/ClientComponent';

import { Metadata } from 'next';
import RefreshWrapper from '../_components/RefreshWrapper';

type Props = {
    params: {
        id: string
    }
}

async function getData(id: string): Promise<GameCenterResponse> {
    const res = await fetch(`${_SERVER_API}/gamecenter/${id}`, {cache: 'no-store'});

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data: GameCenterResponse = await res.json();
    return data;
}

// export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    
//     const { game } = await getData(params.id);

//     const title = `${game?.league?.name} - ${game.teams[0].name} vs ${game.teams[1].name} - Match Details`;
//     const description = `Details about the match between ${game.teams[0].name} and ${game.teams[1].name}.`;

//     return {
//         title,
//         description,
//         icons: '/favicon.png',
//     };
// };


const Layout = async ({
    children,
    params
}: {
    children: ReactNode;
    params: {
        id: string;
    }
}) => {
    const { game, TTL } = await getData(params.id);

    await fetch(`${_SERVER_API}/gamecenter/${params.id}`, {
        next: { revalidate: TTL }
    });

    return (
        <RefreshWrapper interval={TTL * 1000}>
            <ClientComponent game={game}>
                {children}
            </ClientComponent>
        </RefreshWrapper>
        
    );
}
export default Layout;