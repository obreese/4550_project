import {createSlice} from "@reduxjs/toolkit";

import {
    findAllMusicThunk,
    findMusicDetailsByIdThunk,
} from "./search-results-thunk.js";

const searchResultsReducer = createSlice({
    name: 'searchResults',
    initialState: {
        musicDetailsLoading: true,
        musicDetails: undefined,
        resultsLoading: true,
        results: undefined,
    },
    extraReducers: {
        [findAllMusicThunk.pending]: (state, action) => {
            state.resultsLoading = true;
        },
        [findAllMusicThunk.fulfilled]: (state, action) => {
            state.resultsLoading = false;
            state.results = action.payload
        },
        [findMusicDetailsByIdThunk.pending]: (state, action) => {
            state.musicDetailsLoading = true;
        },
        [findMusicDetailsByIdThunk.fulfilled]: (state, action) => {
            state.musicDetailsLoading = false;
            state.musicDetails = action.payload
        },
    }
})

export default searchResultsReducer.reducer