


export interface ContentBlockProps {
    title?: string; 
    buttonText?: string;
    children: React.ReactNode;
    cb?:() => void;
    rotate?:string;
    buttonColor?:string;
    size?:"max" | "min" | "average";
    styles?:React.CSSProperties;
    border?:boolean;
}