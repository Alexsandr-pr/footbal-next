import { _SERVER_API } from '@/lib/config/consts';
import { LeaguesResponse } from '@/lib/types/response';
import useSWR from 'swr';
import Today from './Today';

function ClientRefresh({ initialData } : {
    initialData: LeaguesResponse;
}) {
    const fetcher = (url: string) => fetch(url).then(res => res.json());

    const { data, mutate } = useSWR(`${_SERVER_API}/games/today`, fetcher, {
        fallbackData: initialData,
        refreshInterval: initialData.TTL * 1000,
        revalidateOnFocus:true,
    });

    return (
        <Today calendar={data?.calendar} leagues={data?.leagues} />
    );
}
export default ClientRefresh