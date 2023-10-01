import React from 'react'
import {TBDB_IMAGE_CDN_URL} from '../utils/constant' 
const MovieCard = ({posterPath}) => {
  return (
    <div className="w-40 pr-4">
         <img alt="Movies Card" src={TBDB_IMAGE_CDN_URL + posterPath} />

    </div>
  )
}

export default MovieCard