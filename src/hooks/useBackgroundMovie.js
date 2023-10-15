import {useEffect} from 'react'
import { YOUTUBE_LINK, API_OPTION,TRAILER } from '../utils/constant';
import { useDispatch } from 'react-redux';
import {addTrailerVideo} from '../utils/moviesSlice'

const useBackgroupMovies = (movieId) => {
    const dispacth = useDispatch();
    const getMovieVideoForBackGround = async(movieId) => {
        const data = await fetch(YOUTUBE_LINK +`${movieId}/videos`,API_OPTION)
        const movieVideos = await data.json();
        const filterData = movieVideos.results.filter((video) => {
           return video.type === TRAILER
        })
        const trailer = filterData.length ?  filterData[0] : movieVideos.results[0];
        dispacth(addTrailerVideo(trailer))
     }
    
    
     useEffect(() => {
        getMovieVideoForBackGround(movieId)
     }, [movieId])
}

export default useBackgroupMovies;


