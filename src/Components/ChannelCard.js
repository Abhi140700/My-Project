import React from "react";
import { Link } from "react-router-dom";
// channelDetail
const ChannelCard = (props) => {
  return (
    <div>
      <Link
        to={`/channel/${props.channelDetail?.id?.channelId}`}
        className="text-decoration-none text-light"
      >
        <div className="card bg-transparent border-0 text-center mx-auto">
          <img
            src={props.channelDetail?.snippet?.thumbnails?.high?.url}
            alt={props.channelDetail?.snippet?.title}
            style={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              border: "1px solid #e3e3e3",
              objectFit:"cover",
            }}
            className="mx-auto"
          />
          <div className="card-body">
            <p className="h5"> {props.channelDetail?.snippet?.title} </p>
            {props.channelDetail?.statistics?.subscriberCount && (
              <p>
                {parseInt(
                  props.channelDetail?.statistics?.subscriberCount
                ).toLocaleString("en-US")}{" "}
                Subscribers
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
