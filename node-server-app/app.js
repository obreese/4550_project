import express from 'express';
import cors from 'cors';
import MusicController from './music/music-controller.js'
import { spotifyAuth } from './spotify_auth/spotify-auth-controller.js';

const app = express();
app.use(cors());
app.use(express.json());

await spotifyAuth();

MusicController(app);

app.listen(4000)