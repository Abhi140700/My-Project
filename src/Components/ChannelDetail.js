import React from "react";
import { useParams } from "react-router-dom";
import { ChannelCard, Videos } from "./index";
import { useEffect, useState } from "react";
import { Api } from "./Api";

const ChannelDetail = (props) => {
  const [channelDet, setChannelDet] = useState(null);
  const [channelVideos, setchannelVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    Api(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDet(data?.items[0]);
    });

    Api(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data) => {
      setchannelVideos(data?.items);
    });
  }, [id]);

  console.log(channelVideos);

  return (
    <div className="">
      <div className="">
        <ChannelCard channelDetail={channelDet} />
      </div>
      <div className="d-flex px-1">
        <Videos videos={channelVideos} />
      </div>
      <div className=""></div>
    </div>
  );
};

export default ChannelDetail;
