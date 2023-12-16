import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import useBackgroupMovies from '../hooks/useBackgroundMovie';
import { useSelector } from 'react-redux';
import useMovieDetails from '../hooks/useMovieDetails';
import {useParams} from 'react-router-dom'
const MovieDetails = () => {
  const {movieId} = useParams()
  movieId && useMovieDetails(movieId)
  //const detailsVideo = useSelector(store => store.movies?.movieDetails)
  

  return (
    <div className="h-screen w-screen bg-black">
        <nav className="fixed 
        w-full 
        p-4 
        z-10
        flex 
        flex-row
        items-center 
        gap-8
        bg-black
        bg-opacity-70
        ">
<FaArrowLeft  className="text-white" size={40}/>
<p className="text-white text-1xl md:text-3xl font-bold">
    <span>Watching: </span>
</p>
</nav>
{/* <iframe 
     className="w-screen aspect-video"
     src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&mute=1&autoplay=1&loop=1&controls=0"}
     title="YouTube video player" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     >
    </iframe> */}

</div>
  )
}

export default MovieDetails