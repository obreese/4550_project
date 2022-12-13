import express from 'express';
import cors from 'cors';
import MusicController from './music/music-controller.js'
import session from 'express-session'
import { spotifyAuth } from './spotify_auth/spotify-auth-controller.js';
import mongoose from "mongoose";
import UsersController from "./users/users-controller.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/goodlistensdb';


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}


mongoose.connect(CONNECTION_STRING, options);



const app = express();
app.use(cors());
app.use(express.json());

/*
app.use(cors({
    credentials: false,
    origin: 'http://localhost:3000'
}))

app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
*/
await spotifyAuth();

MusicController(app);
UsersController(app)

app.listen(4000)