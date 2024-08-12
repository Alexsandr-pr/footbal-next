"use client";

import { useDispatch } from "react-redux";

import TabsTrigger from "@/components/ui/tabs-trigger/TabsTrigger"
import { openFirstTab, openSecondTab } from "@/store/gameCenterSlice";


const TabsTriggerBlock = () => {
    const dispatch = useDispatch();

    const data = [
        {
            label: "VISTA PREVIA",
            route: "first",
            cb: () => dispatch(openFirstTab())
        },
        {
            label: "LINAUPS",
            route: "second",
            cb: () => dispatch(openSecondTab())
        }
    ]


    return (
            <TabsTrigger data={data}/>
    )
}

export default TabsTriggerBlock