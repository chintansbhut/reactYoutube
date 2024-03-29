import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onselectVideo }) => {
  return (
    <div
      className="video-item item"
      onClick={() => {
        onselectVideo(video);
      }}
    >
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
