import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addUpcomingVideo} from '../utils/moviesSlice'
import { API_OPTION } from '../utils/constant';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movies.upcomingVideo)

    
    const getUpcomingMovies = async() => {
     const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?page=1`,API_OPTION)
     const json = await data.json();
     dispatch(addUpcomingVideo(json.results))
    }
    
    useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
    }, []);
}



export default useUpcomingMovies;
