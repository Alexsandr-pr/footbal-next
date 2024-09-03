
import { _SERVER_API } from "@/config/consts";
import { getDataMain } from "@/lib/api";
import ClientRefreshTomorrow from "./ClientRefreshTomorrow";


export const revalidate = 11;
export default async function Page() {
    const data = await getDataMain("/tomorrow", "tomorrow");

    return (
        <ClientRefreshTomorrow initialData={data}/>
    )
}
