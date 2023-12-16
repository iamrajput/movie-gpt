import React from 'react'
import {TBDB_IMAGE_CDN_URL} from '../utils/constant' 
import { useNavigate } from 'react-router-dom';
const MovieCard = ({posterPath,movideId}) => {
  const navigate = useNavigate()
  if(!posterPath) return null;
  // const handleMovieDetailsPage = (movideId) => {
  //   console.log("movie---",movideId)
  //   navigate(`/movie-details/${movideId}`);
  // }
  return (
    <div className="md:w-40 w-36 pr-4 group">
         <img 
         alt="Movies Card"
         className="
         cursor-pointer 
         object-cover 
         transition 
         duration 
         shadow-xl 
         rounded-md 
         group-hover:opacity-10 
         delay-300 
         w-full 
         h-[12vw]" 
         src={TBDB_IMAGE_CDN_URL + posterPath} 
        
         />
         {/* <div 
         
         className="
         opacity-0 
         absolute 
         top-0 
         transition 
         duration-200 
         z-10 
         invisible 
         delay-300 
         w-full 
         scale-0 
         group-hover:blur-sm
         hover:!blur-none
         group-hover:scale-[1]
         "
         >

         <img 
         alt="Movies Card"
         className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]" 
         src={TBDB_IMAGE_CDN_URL + posterPath} 
         />
          </div> */}
    </div>
  )
}

export default MovieCard