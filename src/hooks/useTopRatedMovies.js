import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addTopRatedVideo} from '../utils/moviesSlice'
import { API_OPTION } from '../utils/constant';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.topratedVideo);

    const getTopratedMovies = async() => {
     const data = await fetch(` https://api.themoviedb.org/3/movie/top_rated?page=1`,API_OPTION)
     const json = await data.json();
     dispatch(addTopRatedVideo(json.results))
    }
    
    useEffect(() => {
       !topRatedMovies && getTopratedMovies();
    }, []);
}



export default useTopRatedMovies;
