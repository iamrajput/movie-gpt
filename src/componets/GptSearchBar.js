import React,{useRef} from 'react'
import lang from '../utils/languageConstent';
import { useSelector, useDispatch } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTION } from '../utils/constant';
import {addGptMoviesResult} from '../utils/gptSlice'
import {startFectching,stopFectching} from '../utils/moviesSlice'


const GptSearchBar = () => {
 const langKey = useSelector(store => store.config?.languagePreference)
 const searchText = useRef(null); 
 const dispatch = useDispatch();

const fetchSearchMovie = async(movieName) => {
  const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', API_OPTION)
  const json = await data.json();
  return json.results;
} 

const handleSearch = async() => {
  dispatch(startFectching());

   const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +searchText.current.value +". only give me names of 5 movies,comma seperted like the example result givem ahead. Example Result:Gader,Sholay,Don,Golmaal,Koi mile gya "
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery}],
        model: 'gpt-3.5-turbo',
      });

      if(!gptResult.choices?.[0]?.message?.content){
        return;
      }
    
      
      const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");
       //for each movie we will search tmdb 
      const promiseArray = gptMovies.map((movie) => fetchSearchMovie(movie));
      const tmdbResult = await Promise.all(promiseArray)
      
      dispatch(addGptMoviesResult({movieNames:gptMovies,movieResults:tmdbResult}))
      dispatch(stopFectching());
}





  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form className="md:w-1/2 w-full bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input type="search" className="p-4 m-4 col-span-9" placeholder={lang[langKey]?.gptSearch}  ref={searchText}/>
        <button className="col-span-3 m-4 py-2 px-2 bg-red-700 text-white rounded-lg" onClick={handleSearch}>{lang[langKey]?.search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar