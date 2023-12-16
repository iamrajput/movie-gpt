import {createSlice} from '@reduxjs/toolkit'
const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularVideo:null,
        topratedVideo:null,
        upcomingVideo:null,
        movieDetails:null,
        loading:false
    },
    reducers:{
        addNowPlayingMovies: (state,action) => {
          state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state,action) => {
           state.trailerVideo = action.payload;
        },
        addPopularVideo: (state,action) => {
            state.popularVideo = action.payload;
         },
         addTopRatedVideo:(state,action) =>{
            state.topratedVideo = action.payload;
         },
         addUpcomingVideo:(state,action) =>{
            state.upcomingVideo = action.payload;
         },
         getMovieDetailsVideo:(state,action) => {
            state.movieDetails = action.movieDetails;
         },
         startFectching:(state,action) => {
            state.loading = true
         },
         stopFectching:(state,action) => {
            state.loading =false
         } 
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularVideo,addTopRatedVideo,addUpcomingVideo,getMovieDetailsVideo,startFectching,stopFectching} = moviesSlice.actions;

export default moviesSlice.reducer;