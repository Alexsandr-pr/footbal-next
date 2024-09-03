import TabsTrigger from '@/components/ui/tabs/TabsTrigger';
import Title from '@/components/ui/title/Title'
import React, { ReactNode } from 'react'

const Layout = ({
    children
} : {
    children:ReactNode;
}) => {
    let dataTrigger = [
        {
            label: "SIN CLUBES EXTINTOS",
            route: `/title-ranking-history`,
        },
        {
            label: "INCLUIR CLUBES EXTINTOS",
            route: `/title-ranking-history/clubes`,
        }
    ]
    

    return (
        <>
            <Title title="RANKING TOTAL"/>
            <TabsTrigger clazz={""} type="text" dataText={dataTrigger}/>
            {children}
        </>
    )
}

export default Layout