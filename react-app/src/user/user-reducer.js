import {createSlice} from "@reduxjs/toolkit";

import {
    deleteUserThunk,
    findAllUsersThunk,
    findUserByIdThunk,
    loginThunk,
    logoutThunk, profileColorThunk,
    profileThunk,
    registerThunk,
    updateUserThunk
} from "./user-thunk";

const userReducer = createSlice({
    name: 'user',
    initialState: {
        currentUser: undefined,
        isAdmin: false,
        loading: false,
        failed: false,
        profile: null
    },
    extraReducers: {
        [updateUserThunk.fulfilled]: (state, action) => {
            state.failed = false
            state.currentUser = action.payload
        },
        [deleteUserThunk.fulfilled]: (state, action) => {
            state.failed = false
            state.currentUser = null
        },
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.failed = false
            state.profile = action.payload
            state.loading = false
        },
        [findUserByIdThunk.pending]: (state, action) => {
            state.loading = true
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.failed = false
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.failed = false
            state.profile = action.payload
            state.currentUser = action.payload
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.failed = false
            state.currentUser = action.payload
        },
        [registerThunk.rejected]: (state, action) => {
            state.failed = true
            state.currentUser = null
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.failed = false
            state.currentUser = action.payload
        },
        [loginThunk.rejected]: (state, action) => {
            state.failed = true
            state.currentUser = null
        }
    }
})

export default userReducer.reducer