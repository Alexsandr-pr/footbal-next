import React, { ReactNode } from 'react'
import { _SERVER_API } from "@/config/consts";
import ClientComponent from '../_components/ClientComponent';

import { Metadata } from 'next';
import { GameCenterResponse } from '@/types/response';


type Props = {
    params: {
        id: string
    }
}


export async function getDataGameCenter(id: string): Promise<GameCenterResponse> {
    
    const res = await fetch(`${_SERVER_API}/gamecenter/${id}`, {
        next: { revalidate: 5 }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data: GameCenterResponse = await res.json();

    return data;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    
    const { game } = await getDataGameCenter(params.id);

    const title = `${game?.league?.name} - ${game.teams[0].name} vs ${game.teams[1].name} - Match Details`;
    const description = `Details about the match between ${game.teams[0].name} and ${game.teams[1].name}.`;

    return {
        title,
        description,
        icons: '/favicon.png',
    };
};


const Layout = async ({
    children,
    params
}: {
    children: ReactNode;
    params: {
        id: string;
    }
}) => {
    const data = await getDataGameCenter(params.id);

    return (
        <ClientComponent id={params.id} initialData={data}>
            {children}
        </ClientComponent>
    );
}
export default Layout;