import {createSlice} from "@reduxjs/toolkit";

import {
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
        loggedIn: false,
        currentUser: {},
        isAdmin: false,
        loading: false,
        profile: null
    },
    extraReducers: {
        [updateUserThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
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