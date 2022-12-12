import {createSlice} from "@reduxjs/toolkit";

import {
    findAllUsersThunk,
    findUserByIdThunk,
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk
} from "./user-thunk";

const userReducer = createSlice({
    name: 'user',
    initialState: {
        loggedIn: true,
        currentUser: {color: '#FF0000'},
        isAdmin: false,
        loading: false,
        profile: null
    },
    extraReducers: {
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.profile = action.payload
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.loggedIn = false
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