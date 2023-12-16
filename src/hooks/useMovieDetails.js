import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_LINK, API_OPTION } from '../utils/constant';
import {getMovieDetailsVideo} from '../utils/moviesSlice';

const useMovieDetails = (movieId) => {
   const dispacth = useDispatch();
  // const detailsVideo = useSelector(store => store.movies?.movieDetails)

  const getMovieDetailsVideo = async(movieId) => {
      const data = await fetch(YOUTUBE_LINK +`670292`,API_OPTION)
      const movieVideos = await data.json();
      console.log("moviews====",movieVideos)
      //dispacth(getMovieDetailsVideo(movieVideos))
     // dispacth(getMovieDetailsVideo(movieVideos))
   }
  
  
   useEffect(() => {
    if(movieId){
      getMovieDetailsVideo(movieId)
    }
   }, [])
}

export default useMovieDetails