import {createSlice} from "@reduxjs/toolkit";

import {
    findMusicDetailsByIdThunk,
} from "./search-results-thunk.js";

const searchResultsReducer = createSlice({
    name: 'searchResults',
    initialState: {
        musicDetailsLoading: true,
        musicDetails: undefined,
        resultsLoading: false,
        results: [],
    },
    extraReducers: {
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