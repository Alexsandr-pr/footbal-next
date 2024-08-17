import Image from 'next/image';

const Loading = ({
    clazz,
    size
} : {
    clazz?: string;
    size:number;
}) => {
    return (
        <>
            {
            clazz ? 
                <div className={clazz}>
                    <Spinner size={size}/>
                </div> : 
                <Spinner size={size}/>
            }
        </>
        
    )
}

const Spinner = ({ size } : { size: number;}) => {
    return (
        <Image 
            unoptimized
            width={size} 
            height={size} 
            src="/assets/loading/loading.gif" 
            alt="Loading..." 
        />
    )
}

export default Loading