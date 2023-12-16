import React from 'react'
import { useSelector } from 'react-redux';

const Menu = ({handleSignOut,handleGptClick}) => {
  const isGpt = useSelector((store) => store.gpt?.showGptSearch);

  return (
    <div className="bg-opacity-50 bg-black w-30 mx-2 absolute top-20 right-0 py-0 flex-col border-2 border-gray-500 ">
     <div className="flex flex-col gap-4">
     <div className="px-4 text-center text-white hover:cursor-pointer pt-1" onClick={handleGptClick}>
           {isGpt ? 'Home' : 'Movie Search'} 
        </div>
        <hr className="bg-gray-600 border-0 h-px"/>
        <div className="px-4 text-center text-white hover:cursor-pointer pb-1"  onClick={handleSignOut}>
            Sign Out
        </div>
        
     </div>

    </div>
  )
}

export default Menu