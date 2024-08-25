import { _SERVER_API } from '@/config/consts';
import Image from 'next/image';

const Images = ({
    type
} : {
    type?:number;
}) => {
    
    return (
        <Image 
            className="calendario-events__item-image" 
            width={24} 
            height={24} 
            src={`${_SERVER_API}/images/games/event/${type}`} 
            alt="image" 
        />
    )
}

export default Images