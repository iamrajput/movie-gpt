import {createSlice} from '@reduxjs/toolkit'
const configSlice = createSlice({
    name:'config',
    initialState:{
        languagePreference:"en"
    },
    reducers:{
         changeLanguage: (state,action) => {
         state.languagePreference = action.payload
        }
    }
})

export const {changeLanguage} = configSlice.actions;

export default configSlice.reducer;