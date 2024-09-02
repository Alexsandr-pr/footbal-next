import React, { ReactNode } from 'react'
import { _SERVER_API } from "@/config/consts";
import ClientComponent from '../_components/ClientComponent';

import { Metadata } from 'next';
import RefreshWrapper from '../../../../components/RefreshWrapper';
import { getDataGameCenter } from '@/lib/api';
import { useFetchGameData } from '@/hooks/useFetchGameData';

type Props = {
    params: {
        id: string
    }
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