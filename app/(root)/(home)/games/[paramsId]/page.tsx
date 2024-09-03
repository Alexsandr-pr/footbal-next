import { _SERVER_API } from "@/config/consts";
import { getDataMain } from "@/lib/api";
import ClientRefreshDate from "../ClientRefreshDate";
import Loading from "@/components/ui/loading/Loading";
import { Suspense } from "react";

interface PageProps {
    params: {
        paramsId: string;
    };
}

export default async function GamePage({ params }: PageProps) {
    const { paramsId } = params;
    const data = await getDataMain(`/${paramsId}`);

    return (
        <Suspense fallback={<Loading size={32}/>}>
            <ClientRefreshDate id={paramsId} initialData={data}/>
        </Suspense>
    );
};

