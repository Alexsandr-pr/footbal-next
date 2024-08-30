import { Video } from '@/types/game-center'
import "./video.scss";
import Image from 'next/image';
import Link from 'next/link';


const Video = ({
    videos
} : {
    videos: Video[];
}) => {
    return (
        <div className="videos">
            {
                videos.map(video => {
                    return (
                        <div className="game-video">
                            {video.embedding_allowed 
                            ? 
                            <iframe 
                                src={video.url} 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            >
                            </iframe> 
                            :  
                            <Link target='_blank' href={video.url}>
                                <img height={300} width={860} src={video?.thumbnail_url} alt="" />
                            </Link>
                            }
                        </div>  
                    )
                })
            }
        </div>
    )
}

export default Video