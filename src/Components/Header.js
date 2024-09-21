import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from './utils/appSlice';

const Header = () => {
 const dispatch = useDispatch();
 const handleToggle = () => {
  dispatch(toggleMenu())
 }
 return (
  <div className='grid grid-flow-col p-5 shadow-md'>
   <div className='col-span-1 flex'>
    <img src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png' alt='hamburger' className='h-8 mx-2 cursor-pointer' onClick={handleToggle} />
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s' alt='you-tube' className='h-8' />
   </div>
   <div className='col-span-10 ml-8'>
    <input type='text' className='w-6/12 py-1 pl-2 border border-gray-300 rounded-l-full placeholder:text-slate-400' placeholder='Search' />
    <button type='submit' className='py-1 px-3 border border-gray-200 rounded-r-full bg-gray-100 '>Search</button>
   </div>
   <div className='col-span-1'>
    <img src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg' alt='user' className='h-8' />
   </div>
  </div>
 )
}

export default Header