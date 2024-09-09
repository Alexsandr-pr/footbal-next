import { Video } from '@/lib/types/game-center';
import styles from "./video.module.scss";



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
        <div className={styles.videos}>
            <div key={video.url} className={styles.gamevideo}>
                {video.embedding_allowed 
                ? 
                <iframe src={embedUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                :  
                <a target='_blank' className={styles.gamevideopreview} href={video.url}>
                    <img width={82} height={60} className={styles.gamevideopreviewimage} src="/assets/game-center/video.png" alt="preview button" />
                    <img height={300} width={860} src={video?.thumbnail_url} className={styles.gamevideoimage} alt="preview image" />
                </a>
                }
            </div>  
        </div>
    );
}

export default VideoBlock;