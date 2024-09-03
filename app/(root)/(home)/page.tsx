
import { _SERVER_API } from "@/config/consts";
import { getDataMain } from "@/lib/api";
import ClientRefresh from "./_components/ClientRefresh";


export default async function Page() {
    const data = await getDataMain("/today");

    return (
        <ClientRefresh initialData={data}/>
    )
}
