import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from './Constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

 useEffect(() => {
  getVideos();
 }, []);

 const [videos, setVideos] = useState([]);
 const getVideos = async () => {
  const data = await fetch(YOUTUBE_API)
  const json = await data.json();
  setVideos(json.items);
  console.log(json.items);

 };
 return (


  <div className='mx-2 flex flex-wrap'>
   {
    videos.map((video) => {
     return <VideoCard video={video} />
    })
   }

  </div>
 )
}

export default VideoContainer