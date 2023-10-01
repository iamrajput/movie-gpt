import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  console.log("movies---",movies)
  if(!movies){
    return "Loding....."
  }
  return (
    <div className="bg-black">
      <div className="-mt-72 pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Now Playing"} movies={movies} />
      </div>
    </div>
  )
}

export default SecondaryContainer