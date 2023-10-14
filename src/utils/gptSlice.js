import {createSlice} from '@reduxjs/toolkit'
const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieResults:null,
        movieNames:null
    },
    reducers:{
        toggleGptSearchView: (state,action) => {
         state.showGptSearch = !state.showGptSearch
        },
        addGptMoviesResult:(state,action) => {
            console.log("action ::::",action)
            const {movieNames,movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }
})

export const {toggleGptSearchView,addGptMoviesResult} = gptSlice.actions;

export default gptSlice.reducer;