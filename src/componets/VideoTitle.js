import React from 'react'
import { FaPlay,FaInfoCircle } from "react-icons/fa";
const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 text-white absolute bg-gradient-to-r from-black">
    <h1 className="md:text-6xl text-2xl font-bold">{title}</h1>
    <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
    <div className="flex mt-3">
       <button className="flex gap-2 bg-white text-black md:p-4 md:py-4 py-3 md:px-12 px-2 text-xl rounded-lg hover:bg-opacity-70"><FaPlay className="m-1"/> Play</button>
       <button className="md:flex hidden gap-2 mx-2 bg-gray-500 text-white p-4 px-12 text-xl opacity-50 rounded-lg  hover:bg-opacity-70"><FaInfoCircle className="m-1"/>More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle