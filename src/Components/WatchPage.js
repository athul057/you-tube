import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from './utils/appSlice'

const WatchPage = () => {


 const dispatch = useDispatch();
 useEffect(() => {

  dispatch(closeMenu())
 }, [])

 let [searchParams] = useSearchParams();
 console.log(searchParams.get("v"));

 return (
  <div className='m-4'>
   <iframe width="760" height="415" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-lg'></iframe>
  </div>
 )
}

export default WatchPage