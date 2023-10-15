import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addNowPlayingMovies} from '../utils/moviesSlice'
import { API_OPTION } from '../utils/constant';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)
   
    const getNowPlyingMovies = async() => {
     const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=1`,API_OPTION)
     const json = await data.json();
     dispatch(addNowPlayingMovies(json.results))
    }
    
    useEffect(() => {
     !nowPlayingMovies && getNowPlyingMovies();
    }, []);
}



export default useNowPlayingMovies;
