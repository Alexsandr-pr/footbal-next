
import PreGameGC from './PreGameGC';
import LiveGameResult from './LiveGameResult';
import PostGCResult from './PostGCResult';
import { Status } from '@/types';

const ResultGameCenter = (props: {
    startTime?: string;
    description?: string;
    scores?: [number, number] | [];
    status: Status;
    redCards1: number;
    redCards2: number;
    penalties?: [number, number] | [];
    soundLocal?: boolean;
    gameTime?:string;
}) => {

    const { status } = props;
    if(status.enum === 1) return <PreGameGC  statusName={status?.name} {...props} />
    if(status.enum === 2) return <LiveGameResult {...props}/>
    if(status.enum === 3) return <PostGCResult {...props}/>
}

export default ResultGameCenter