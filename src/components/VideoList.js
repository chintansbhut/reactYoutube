import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos, onselectVideo }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onselectVideo={onselectVideo}
        video={video}
      />
    );
  });
  return <div className="ui relaxed devided list">{renderedList}</div>;
};
export default VideoList;
