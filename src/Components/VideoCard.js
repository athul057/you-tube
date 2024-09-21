import React from 'react'

const VideoCard = ({ video }) => {
 // console.log(video);
 const { thumbnails, title, channelTitle } = video.snippet;
 const { viewCount } = video.statistics;

 return (
  <div className='mb-2 mx-2 w-2/12 shadow p-1 rounded-lg'>
   <img src={thumbnails.medium.url} alt='thumb-nail' className='rounded-lg' />
   <ul>
    <li className='overflow-hidden text-ellipsis line-clamp-2 font-semibold'>
     {title}
    </li>
    <li className=''>
     {viewCount}
    </li>
    <li className=''>
     {channelTitle}
    </li>
   </ul>

  </div>
 )
}

export default VideoCard