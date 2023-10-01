import React from 'react'
import { FaPlay,FaInfoCircle } from "react-icons/fa";
const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 text-white absolute bg-gradient-to-r from-black">
    <h1 className="text-6xl font-bold">{title}</h1>
    <p className="py-6 text-lg w-1/4">{overview}</p>
    <div className="flex">
       <button className="flex gap-2 bg-white text-black p-4 py-4 px-12 text-xl rounded-lg hover:bg-opacity-70"><FaPlay className="m-1"/> Play</button>
       <button className="flex gap-2 mx-2 bg-gray-500 text-white p-4 px-12 text-xl opacity-50 rounded-lg  hover:bg-opacity-70"><FaInfoCircle className="m-1"/>More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle