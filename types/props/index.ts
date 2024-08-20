


export interface ContentBlockProps {
    title: string; 
    buttonText?: string;
    children: React.ReactNode;
    cb?:() => void;
    rotate?:string;
}