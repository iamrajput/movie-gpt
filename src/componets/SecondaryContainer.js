import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  console.log("movies---",movies)
  if(!movies){
    return "Loding....."
  }
  return (
    <div className="bg-black">
      <div className="-mt-72 pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularVideo} />
      <MovieList title={"Top Rated"} movies={movies?.topratedVideo} />
      <MovieList title={"Upcoming"} movies={movies?.upcomingVideo} />
      </div>
    </div>
  )
}

export default SecondaryContainer