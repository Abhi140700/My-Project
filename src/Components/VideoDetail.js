import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { Videos, Loader } from "./";
import { Api } from "./Api";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState();
  const [videos, setVideos] = useState();
  const { id } = useParams();

  useEffect(() => {
    Api(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    Api(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  console.log(videoDetail)

  return (
        <div className="row gx-0">
          <div className="container col-8 mx-4">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <h5 className="pt-3 mb-0">{title}</h5>
            <div className="row align-items-center gx-0">
              <div className="col">
              <Link to={`/channel/${channelId}`} className='text-decoration-none h6'>{channelTitle}</Link>
              </div>
              <div className="col d-flex justify-content-end">
                <p>{parseInt(viewCount).toLocaleString()} views</p>
                <p className="ms-4">{parseInt(likeCount).toLocaleString()} likes</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <Videos videos={videos}/>
          </div>
        </div>
  );
};

export default VideoDetail;
