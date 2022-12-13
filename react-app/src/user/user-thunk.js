import {createAsyncThunk} from "@reduxjs/toolkit";
import {findUserById, login, logout, profile, register, updateUser, deleteUser} from "./user-service";

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)

export const updateUserThunk = createAsyncThunk(
    'updateUser',
    async (userData) => await updateUser(userData)
)

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (uid) => await findUserById(uid)
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const deleteUserThunk = createAsyncThunk(
    'deleteUser',
    async (user) => await deleteUser(user)
)
