"use client"
import WhiteButton from '@/components/ui/buttons/button-white/WhiteButton'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
const Error = ({
    error,
}: {
    error: Error & { digest?: string }
}) => {

    const router = useRouter();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (

        <>
            <h1>Error during data loading </h1>
            <WhiteButton cb={() => router.back()} text={"Go back"}/>
            <WhiteButton cb={() => router.push("/")} text={"Back to Home"}/>
        </>
    )
}

export default Error