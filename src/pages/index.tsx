// pages/index.tsx
import { GetServerSideProps } from 'next';
import MainLayout from '@/components/main-layout/MainLayout';
import { MenuResponse, LeaguesResponse } from '@/lib/types/response';
import { _SERVER_API } from "@/lib/config/consts";

import ClientRefresh from '@/components/home/ClientRefresh';

interface HomePageProps {
    menuData: MenuResponse;
    data:LeaguesResponse;
}

const HomePage: React.FC<HomePageProps> = ({ menuData, data }) => {
    return (
        <MainLayout menuData={menuData}>
            <ClientRefresh initialData={data}/>
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`${_SERVER_API}/menu/`);
    const menuData: MenuResponse = await res.json();

    const data = await getDataMain('/'); 

    context.res.setHeader(`Cache-Control`, `public, max-age=${data.TTL}`);
    
    return {
        props: {
            menuData,
            data
        },
    };
};

export default HomePage;


async function getDataMain(path: string): Promise<LeaguesResponse> {
    const res = await fetch(`${_SERVER_API}/games${path}`);
    
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
}
