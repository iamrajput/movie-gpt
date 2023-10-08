import {createSlice} from '@reduxjs/toolkit'
const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularVideo:null,
        topratedVideo:null,
        upcomingVideo:null
    },
    reducers:{
        addNowPlayingMovies: (state,action) => {
         console.log(action.payload)
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
         } 
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularVideo,addTopRatedVideo,addUpcomingVideo} = moviesSlice.actions;

export default moviesSlice.reducer;