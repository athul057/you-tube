import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
 const isToggle = useSelector((store) => store.app.isMenuOpen)

 if (!isToggle) {
  return null;
 }

 return (
  <div className='w-48 shadow p-5'>
   <ul>
    <li>Home</li>
    <li>Shorts</li>
    <li>Videos</li>
    <li>Live</li>
   </ul>
   <h1 className='font-bold pt-5'>Subcriptions</h1>
   <ul>
    <li>Home</li>
    <li>Shorts</li>
    <li>Videos</li>
    <li>Live</li>
   </ul>
   <h1 className='font-bold pt-5'>Watch Later</h1>
   <ul>
    <li>Home</li>
    <li>Shorts</li>
    <li>Videos</li>
    <li>Live</li>
   </ul>
  </div>
 )
}

export default SideBar