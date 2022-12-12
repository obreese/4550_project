import {createAsyncThunk} from "@reduxjs/toolkit";
import { findAllMusic, findMusicDetails } from "./music-service";

export const findAllMusicThunk = createAsyncThunk(
  'findAllMusic',
  async (searchTerm) => await findAllMusic(searchTerm)
)

export const findMusicDetailsByIdThunk = createAsyncThunk(
    'findMusicDetailsById',
    async ({music_id, type}) => await findMusicDetails(music_id, type)
)