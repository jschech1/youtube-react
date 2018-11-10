import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
    // console.log(props);
    return (
       <li onClick={() => onVideoSelect(video)}>
       <img src={video.snippet.thumbnails.default.url} alt="video snippet" />
       <p>{video.snippet.title}</p>
       </li>
    )
}

export default VideoListItem;