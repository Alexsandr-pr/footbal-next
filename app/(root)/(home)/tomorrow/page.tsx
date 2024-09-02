
import { _SERVER_API } from "@/config/consts";
import { getDataMain } from "@/lib/api";
import ClientRefreshTomorrow from "./ClientRefreshTomorrow";

export default async function Page() {
    const data = await getDataMain("/tomorrow");

    return (
        <ClientRefreshTomorrow initialData={data}/>
    )
}
