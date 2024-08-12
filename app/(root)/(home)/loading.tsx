import Image from "next/image";


export default function Loading() {
    
    return <div className="loading">
        <Image 
            width={32} 
            height={32} 
            src="/assets/loading/loading.gif" 
            alt="Loading..." 
            />
    </div>
}