import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptSearchSuggestion = () => {
  const {movieResults,movieNames} = useSelector(store => store.gpt);
  if(!movieNames) return null

  return (
    <div className="p-4 mt-10 bg-black text-white bg-opacity-90">
    {movieNames.map((movie,index) =>  <MovieList  key={movie} title={movieNames[index]} movies={movieResults[index]}/>)}
    </div>
  )
}

export default GptSearchSuggestion