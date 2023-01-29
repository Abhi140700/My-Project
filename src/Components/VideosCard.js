import React from "react";
import { Link } from "react-router-dom";
import {demoChannelUrl,demoVideoUrl} from "./constants";

const VideosCard = (props) => {
  const id = props.vidz.id.videoId;
  const snippet = props.vidz.snippet;
  console.log(id , snippet);
  return (
    <div>
      <div className="card bg-transparent border-0" style={{ width: 280 }}>
        <Link to={`/video/${id}`}>
          <img
            src={snippet.thumbnails.high.url}
            alt=""
            style={{ width: "100%", height: '150px', objectFit: "cover" }}
          />
        </Link>
        <div className="card-body p-0">
          <Link to={id ? `/video/${id}` : demoVideoUrl} className="text-light text-decoration-none">
            <h6 className="pt-2">{snippet.title.slice(0, 60)}</h6>
          </Link>
          <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl } className="text-muted text-decoration-none">
            <p>{snippet.channelTitle}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideosCard;
