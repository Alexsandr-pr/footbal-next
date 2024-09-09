
import ClientComponent from "@/components/game/client/ClientComponent";
import Layout from "@/components/game/client/Layout";
import Page from "@/components/game/client/Page";
import MainLayout from "@/components/main-layout/MainLayout";
import { _SERVER_API } from "@/lib/config/consts";
import { GameCenterResponse, MenuResponse } from "@/lib/types/response";
import { GetServerSideProps } from "next";

type Props = {
    initialData: GameCenterResponse;
    id:string;
    menuData:MenuResponse;
};

const Game = ({ initialData, id, menuData}: Props) => {
    return (
        <MainLayout menuData={menuData}>
            <ClientComponent id={id} initialData={initialData}>
                <Layout id={id}>
                    <Page id={id}/>
                </Layout>
            </ClientComponent>
        </MainLayout>
        
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`${_SERVER_API}/menu/`);
    const menuData: MenuResponse = await res.json();
    const { id } = context.params as { id: string };
    
    const data = await getDataGameCenter(id);

    context.res.setHeader("Cache-Control", `public, max-age=${data.TTL}`);

    return {
        props: {
            id,
            menuData,
            initialData: data,  
        },
    };
};

export default Game;

async function getDataGameCenter(id: string): Promise<GameCenterResponse & { TTL: number }> {
    const res = await fetch(`${_SERVER_API}/gamecenter/${id}`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data: GameCenterResponse = await res.json();
    const TTL = data.TTL;
    return { game: data.game, TTL };
}
