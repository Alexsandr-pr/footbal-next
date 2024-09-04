import { _SERVER_API } from '@/config/consts';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const response = await fetch(`${_SERVER_API}/gamecenter/${id}`);

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
        }

        const data = await response.json();

        const headers = new Headers({
            'Cache-Control': 'public, s-maxage=1234, stale-while-revalidate=59',
        });

        return NextResponse.json(data, { headers });
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}