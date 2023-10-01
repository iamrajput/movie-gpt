import { useSelector } from 'react-redux';
import useBackgroupMovies from '../hooks/useBackgroundMovie';

const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    useBackgroupMovies(movieId)

  return (
    <div className="w-screen">
     <iframe 
     className="w-screen aspect-video"
     src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&mute=1&autoplay=1&loop=1&controls=0"}
     title="YouTube video player" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     >
    </iframe>

    </div>
  )
}

export default VideoBackground