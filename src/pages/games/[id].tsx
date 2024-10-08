import ClientRefreshPages from "@/components/home/ClientRefreshYesterday";
import MainLayout from "@/components/main-layout/MainLayout";
import { _SERVER_API } from "@/lib/config/consts";
import { LeaguesResponse, MenuResponse } from "@/lib/types/response";
import { GetServerSideProps } from "next";

interface PageProps {
    menuData: MenuResponse;
    data: LeaguesResponse;
    id: string;
}

const Page = ({ data, menuData, id }: PageProps) => {
    return (
        <MainLayout menuData={menuData}>
            <ClientRefreshPages path={id} initialData={data} />
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params } = context;

    const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;

    if (!id) {
        return {
            notFound: true, 
        };
    }

    const res = await fetch(`${_SERVER_API}/menu/`);
    const menuData: MenuResponse = await res.json();

    const data = await getDataMain(id); 

    context.res.setHeader(`Cache-Control`, `public, max-age=${data.TTL}`);

    return {
        props: {
            menuData,
            data,
            id
        },
    };
};

export default Page;

async function getDataMain(id: string): Promise<LeaguesResponse> {
    const res = await fetch(`${_SERVER_API}/games/${id}`); 

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
}
