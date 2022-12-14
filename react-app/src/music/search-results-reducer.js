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
        failed: false
    },
    extraReducers: {
        [findAllMusicThunk.pending]: (state, action) => {
            state.resultsLoading = true;
            state.failed = false;
        },
        [findAllMusicThunk.fulfilled]: (state, action) => {
            state.resultsLoading = false;
            state.results = action.payload
            state.failed = false;
        },
        [findAllMusicThunk.rejected]: (state, action) => {
            state.failed = true;
            state.resultsLoading = false;
        },
        [findMusicDetailsByIdThunk.pending]: (state, action) => {
            state.musicDetailsLoading = true;
            state.failed = false;
        },
        [findMusicDetailsByIdThunk.fulfilled]: (state, action) => {
            state.musicDetailsLoading = false;
            state.musicDetails = action.payload
            state.failed = false;
        },
        [findMusicDetailsByIdThunk.rejected]: (state, action) => {
            state.failed = true;
            state.musicDetailsLoading = false;
        },
    }
})

export default searchResultsReducer.reducer