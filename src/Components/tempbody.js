import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const Body = () => {
 return (
  <div className="flex">
   {/* Sidebar */}
   <div className="h-screen w-48 overflow-y-auto fixed top-14">
    <SideBar />
   </div>

   {/* Main content area with margin to account for the fixed sidebar */}
   <div className=" overflow-y-auto p-4">
    <Outlet />
   </div>
  </div>
 );
}

export default Body;


