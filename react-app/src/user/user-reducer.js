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
        profile: null
    },
    extraReducers: {
        [updateUserThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [deleteUserThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [findUserByIdThunk.fulfilled]: (state, action) => {
            console.log("Got the User By ID")
            console.log(action.payload)
            state.profile = action.payload
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export default userReducer.reducer