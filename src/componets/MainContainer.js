import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    if(!movies) return;
    const mainHomeMovie = movies[0]
    console.log("main movie---",movies[0])
    const {id,original_title,overview} = mainHomeMovie;
    return (
    <>
    <VideoTitle title={original_title} overview={overview}/>
    <VideoBackground movieId={id}/>
     </>
  )
}

export default MainContainer