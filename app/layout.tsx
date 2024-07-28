import type { Metadata } from "next";
// import { Roboto, Roboto_Condensed } from "next/font/google";
import "../styles/globals.scss";

// const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400", "700"] });
// const robotoCondensed = Roboto_Condensed({ subsets: ["cyrillic"], weight: ["700"] });

export const metadata: Metadata = {
    title: "PROMIEDOS - Futbol Argentino - Promedios, Fixture, Posiciones, Copas",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body >{children}</body>
        </html>
    );
}
