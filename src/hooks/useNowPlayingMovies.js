import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {addNowPlayingMovies} from '../utils/moviesSlice'
import { API_OPTION } from '../utils/constant';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    
    const getNowPlyingMovies = async() => {
     const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=1`,API_OPTION)
     const json = await data.json();
     console.log(json)
     dispatch(addNowPlayingMovies(json.results))
    }
    
    useEffect(() => {
     getNowPlyingMovies();
    }, []);
}



export default useNowPlayingMovies;
