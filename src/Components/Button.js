import React from 'react'

function Button({ name }) {
 return (
  <div>
   <button className='border  bg-gray-200 px-3 py-2 mx-2 my-3 rounded-lg'>
    {name}
   </button>
  </div>
 )
}

export default Button