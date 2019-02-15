import React from 'react';


const VideoDetail = props => {

    

    if(!props.video) {
        return(
            <div>Loading...</div>
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    
    return(
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} />
            </div>
            <div className="ui segment">
                <div className="ui header">
                    <h4>{props.video.snippet.title}</h4> 
                </div>
            <p>{props.video.snippet.description}</p>
        </div>
        </div>
    );
}

export default VideoDetail;