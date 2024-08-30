'use client' 

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Error({
    error,
}: {
    error: Error & { digest?: string }
}) {
    const router = useRouter();

    useEffect(() => {
        console.error(error);
    }, [error]);
    
    return (
        <div className='error-body'>
            <h2>There is no information about soccer games on that day.</h2>
            <button
                onClick={() => router.back()}
            >
                Come Back
            </button>
        </div>
    );
}
