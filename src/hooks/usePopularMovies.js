import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addPopularVideo} from '../utils/moviesSlice'
import { API_OPTION } from '../utils/constant';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularVideo)

    
    const getPopularMovies = async() => {
     const data = await fetch(`https://api.themoviedb.org/3/movie/popular?page=1`,API_OPTION)
     const json = await data.json();
     console.log(json)
     dispatch(addPopularVideo(json.results))
    }
    
    useEffect(() => {
        !popularMovies && getPopularMovies();
    }, []);
}



export default usePopularMovies;
