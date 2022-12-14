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
            console.log("It is I who am messing with your day")
            state.currentUser = action.payload
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [registerThunk.rejected]: (state, action) => {
            alert("Username not Available!!!")
            state.currentUser = null
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.rejected]: (state, action) => {
            alert("Username/Password Pair is Incorrect!")
            state.currentUser = null
        }
    }
})

export default userReducer.reducer