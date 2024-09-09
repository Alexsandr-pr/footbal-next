import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import StoreProvider from "@/lib/store/StoreProvider";

import '@/styles/globals.scss';
import "@/styles/live-odds.scss";
import "@/styles/pole.scss";
import "@/styles/prediction.scss";
import "@/styles/block.scss";
import "@/styles/calendario-events.scss";
import "@/styles/table.scss";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        document.documentElement.lang = 'en';
    }, []);

    return (
        <StoreProvider>
            <Component {...pageProps} />
        </StoreProvider>
    );
}


export default MyApp;
