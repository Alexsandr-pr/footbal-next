
import { ReactNode } from "react";
import TabsTrigger from "./TabsTrigger";

const TabsBlock = ({
    children,
    data,
    activeTab,
    dataImage,
    type,
    childrenTop
} : {
    children: ReactNode;
    data?: {
        label: string;
        route: string;
        cb: () => void;
    }[];
    activeTab:string;
    dataImage?: {
        countryId: string;
        teamId:string;
        route:string;
        cb:() => void;
    }[];
    type?: "image" | "text";
    childrenTop?: ReactNode;
}) => {

    return (
        <>  
            {childrenTop}
            <TabsTrigger type={type} dataImage={dataImage} activeTab={activeTab} dataText={data}/>
            {children}
        </>
    )
}

export default TabsBlock