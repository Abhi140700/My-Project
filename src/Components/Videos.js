import React from 'react'
import {VideosCard ,ChannelCard , Loader} from './';

const Videos = (props) => {

  if(!props.videos?.length) return <Loader />;

  return (
    <div className='d-flex justify-content-evenly align-items-center flex-wrap'>
      {
        props.videos.map((item , key )=>{
          return(
            <div key={key}>
              {item.id.videoId && <VideosCard vidz={item}/>}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </div>
          );
        })
      }
    </div>
  )
}

export default Videos
