import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    const videoTtems = props.videos.map((video) => {
        return(
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}
            />
        )
    })
    return(
        <ul className="col-md-4 list-group">
            { videoTtems }
        </ul>
    )
}

export default VideoList;