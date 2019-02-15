import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
    const renderedList = props.videos.map((video) => {
        return(
            <div><VideoItem key={video.id.videoId} onVideoSelect={props.onVideoSelect} video={video}/></div>
        );
    });
    return(
        <div className="ui list">
            {renderedList}
        </div>
    );
};

export default VideoList;