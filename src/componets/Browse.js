import {useEffect} from 'react'
import Header from './Header';
import { API_OPTION } from '../utils/constant';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const toggleView = useSelector(store => store.gpt?.showGptSearch)
  return (
    <>
    <Header />
    {toggleView ?  <GptSearch /> : 
    <>
    (
    <MainContainer />
    <SecondaryContainer />
    )
    </>
    }
    </>
  )
}

export default Browse