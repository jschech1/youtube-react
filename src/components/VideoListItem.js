import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
    // console.log(props);
    return (
       <div onClick={() => onVideoSelect(video)}>
       <img src={video.snippet.thumbnails.default.url} alt="video snippet" />
       <p>{video.snippet.title}</p>
       </div>
    )
}

export default VideoListItem;