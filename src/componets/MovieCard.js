import React from 'react'
import {TBDB_IMAGE_CDN_URL} from '../utils/constant' 
const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="md:w-40 w-36 pr-4">
         <img alt="Movies Card" src={TBDB_IMAGE_CDN_URL + posterPath} />

    </div>
  )
}

export default MovieCard