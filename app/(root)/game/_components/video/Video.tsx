import { Video } from '@/types/game-center';
import "./video.scss";

import Link from 'next/link';

const VideoBlock = ({
    videos
} : {
    videos: Video[];
}) => {
    
    const video = videos[0];

    if (!video) {
        return null; 
    }

    const embedUrl = video.url.replace("watch?v=", "embed/");

    return (
        <div className="videos">
            <div key={video.url} className="game-video">
                {video.embedding_allowed 
                ? 
                <iframe src={embedUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                :  
                <Link target='_blank' className='game-video-preview' href={video.url}>
                    <img className='game-video-preview-image' src="/assets/game-center/video.png" alt="preview button" />
                    <img height={300} width={860} src={video?.thumbnail_url} alt="preview image" />
                </Link>
                }
            </div>  
        </div>
    );
}

export default VideoBlock;