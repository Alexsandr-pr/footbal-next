
import { ReactNode } from "react";
import TabsTrigger from "./TabsTrigger";

const TabsBlock = ({
    children,
    data,
    activeTab,
    dataImage,
    type,
    childrenTop,
    showCountryFlags
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
    showCountryFlags?:boolean;
}) => {

    return (
        <div className="flex-16-lineups-gc-button-gap">  
            {childrenTop}
            <TabsTrigger showCountryFlags={showCountryFlags} type={type} dataImage={dataImage} activeTab={activeTab} dataText={data}/>
            {children}
        </div>
    )
}

export default TabsBlock