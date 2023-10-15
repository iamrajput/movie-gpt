import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSearchSuggestion from './GptSearchSuggestion';
import {BG_URL} from '../utils/constant'

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
    <img src={BG_URL} alt="bg_image" className="md:w-screen h-screen object-cover"/>
   </div>
    <div>
        <GptSearchBar />
        <GptSearchSuggestion />
    </div>
    </>
  )
}

export default GptSearch