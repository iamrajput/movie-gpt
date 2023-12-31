import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
  return (
    <div className="px-6">
       <h1 className="py-4 md:text-3xl text-lg text-white">{title}</h1>
     {movies && (
            <div className="flex overflow-x-scroll">
            <div className="flex">
                {movies.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path} movideId={movie.id}/>)}
            </div>
            </div>
     )}  
    </div>
  )
}

export default MovieList