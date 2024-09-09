import ClientRefreshPages from "@/components/home/ClientRefreshYesterday";
import MainLayout from "@/components/main-layout/MainLayout";
import { _SERVER_API } from "@/lib/config/consts";
import { LeaguesResponse, MenuResponse } from "@/lib/types/response";
import { GetServerSideProps } from "next";


interface PageProps {
    menuData: MenuResponse;
    data:LeaguesResponse;
}

const Page = ({data, menuData} : PageProps) =>  {

    return (
        <MainLayout menuData={menuData}>
            <ClientRefreshPages path="tomorrow" initialData={data}/>
        </MainLayout>       
        
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`${_SERVER_API}/menu/`);
    const menuData: MenuResponse = await res.json();

    const data = await getDataMain('/tomorrow'); 

    context.res.setHeader(`Cache-Control`, `public, max-age=${data.TTL}`);
    
    return {
        props: {
            menuData,
            data
        },
    };
};

export default Page


async function getDataMain(path: string): Promise<LeaguesResponse> {
    const res = await fetch(`${_SERVER_API}/games${path}`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
}