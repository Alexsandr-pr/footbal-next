
import { _SERVER_API } from "@/config/consts";
import { getDataMain } from "@/lib/api";
import ClientRefreshYesterday from "./ClientRefreshYesterday";


export default async function Page() {
    const data = await getDataMain("/yesterday");

    return (
        <ClientRefreshYesterday initialData={data}/>
    )
}
