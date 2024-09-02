
import { _SERVER_API } from "@/config/consts";
import Today from "./_components/home/Today";
import RefreshWrapper from "@/components/RefreshWrapper";
import { getDataMain } from "@/lib/api";
import ClientRefresh from "./_components/ClientRefresh";


export default async function Page() {
    const data = await getDataMain("/today");

    return (
        <ClientRefresh initialData={data}/>
    )
}
