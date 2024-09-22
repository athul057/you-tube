import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from './utils/appSlice';
import { SUGGESTION_API } from './Constants';

const Header = () => {
 const [searchQuery, setSearchQuery] = useState("");
 const [suggestionData, setSuggestionData] = useState([]);

 const dispatch = useDispatch();
 const handleToggle = () => {
  dispatch(toggleMenu());
 };

 const searchSuggestion = async () => {
  const data = await fetch(SUGGESTION_API + searchQuery);
  const json = await data.json();
  setSuggestionData(json[1]);
 };

 useEffect(() => {
  if (searchQuery) {
   searchSuggestion();
  } else {
   setSuggestionData([]);
  }
 }, [searchQuery]);

 return (
  <div className="sticky top-0 z-50 bg-white shadow-md">
   <div className='grid grid-flow-col p-5'>
    {/* Hamburger and Logo */}
    <div className='col-span-1 flex'>
     <img
      src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png'
      alt='hamburger'
      className='h-8 mx-2 cursor-pointer'
      onClick={handleToggle}
     />
     <img
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s'
      alt='you-tube'
      className='h-8'
     />
    </div>

    {/* Search Input and Suggestions */}
    <div className='col-span-10 ml-8 relative'>
     <div className='flex'>
      <input
       type='text'
       className='w-6/12 py-1 pl-2 border border-gray-300 rounded-l-full placeholder:text-slate-400 focus:outline-none'
       value={searchQuery}
       onChange={(e) => setSearchQuery(e.target.value)}
       placeholder='Search'
      />
      <button className='py-1 px-3 border border-gray-200 rounded-r-full bg-gray-100'>
       Search
      </button>
     </div>

     {/* Suggestion Dropdown */}
     {suggestionData.length > 0 && (
      <div className='absolute top-10 left-0 bg-white w-6/12 shadow-lg rounded-lg'>
       <ul>
        {suggestionData.map((suggestion, index) => (
         <li key={index} className='p-2 hover:bg-gray-100 cursor-pointer'>
          {suggestion}
         </li>
        ))}
       </ul>
      </div>
     )}
    </div>

    {/* User Icon */}
    <div className='col-span-1'>
     <img
      src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'
      alt='user'
      className='h-8'
     />
    </div>
   </div>
  </div>
 );
};

export default Header;
