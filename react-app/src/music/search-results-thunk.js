import {createAsyncThunk} from "@reduxjs/toolkit";
import { findMusicDetails } from "./music-service";

export const findMusicDetailsByIdThunk = createAsyncThunk(
    'findMusicDetailsById',
    async ({music_id, type}) => await findMusicDetails(music_id, type)
)