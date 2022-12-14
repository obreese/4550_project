import axios from 'axios';
import {spotifyAuth} from '../spotify_auth/spotify-auth-controller.js';

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

const _formatMusicDataList = (songsDataList, albumsDataList, artistsDataList) => {
    const formattedSongsList = Array.from(songsDataList.tracks.items.map(musicData => {
        return {
            type: "music",
            _id: musicData.id,
            music_type: "song",
            song: musicData.name,
            album: musicData.album.name,
            artist: musicData.artists.map(artist => artist.name).join(', '),
            image: musicData.album.images[0].url,
        }
    }).values()).slice(0, 5);
    const formattedAlbumsList = Array.from(albumsDataList.albums.items.map(musicData => {
        return {
            type: "music",
            _id: musicData.id,
            music_type: "album",
            album: musicData.name,
            artist: musicData.artists.map(artist => artist.name).join(', '),
            image: musicData.images[0].url,
        }
    }).values()).slice(0, 5);
    const formattedArtistsList = Array.from(artistsDataList.artists.items.map(musicData => {
        return {
            type: "music",
            _id: musicData.id,
            music_type: "artist",
            song: musicData.name,
            artist: musicData.name,
            image: musicData.images[0]?.url,
        }
    }).values()).slice(0, 5);

    return [...formattedSongsList, ...formattedAlbumsList, ...formattedArtistsList]
}

const _formatMusicDetails = (musicData, type) => {
    let formattedMusicDetails = {
        type: "music_detailed",
        _id: musicData.id,
        music_type: type,
    }

    console.log(musicData)

    if (type === 'artist') {
        return {
            ...formattedMusicDetails,
            artist: musicData.name,
            image: musicData.images[0]?.url,
            extra_info: 'Genres: ' + musicData.genres.join(', '),
        }
    } else if (type === 'album') {
        return {
            ...formattedMusicDetails,
            album: musicData.name,
            artist: musicData.artists[0].name,
            image: musicData.images[0].url,
            extra_info: musicData.total_tracks + ' songs',
        }
    } else {
        return {
            ...formattedMusicDetails,
            song: musicData.name,
            album: musicData.album.name,
            artist: musicData.artists[0].name,
            image: musicData.album.images[0].url,
            extra_info: musicData.explicit ? 'Not safe for children' : 'Safe for children',
        }
    }
}

const findAllMusic = async (req, res) => {
    const searchTerm = req.params['searchTerm']

    let responses = await Promise.all([
        axios.get(`${SPOTIFY_BASE_URL}/search?q=${searchTerm}&type=track`),
        axios.get(`${SPOTIFY_BASE_URL}/search?q=${searchTerm}&type=album`),
        axios.get(`${SPOTIFY_BASE_URL}/search?q=${searchTerm}&type=artist`),
    ]);

    responses.map(response => {
        if (response.data?.error?.status === 401 && response.data?.error?.message === "The access token expired") {
            spotifyAuth().then(() => {
                findAllMusic(req, res);

            });
        }
    })

    const songsDataList = await responses[0].data;
    const albumsDataList = await responses[1].data;
    const artistsDataList = await responses[2].data;

    res.send(_formatMusicDataList(songsDataList, albumsDataList, artistsDataList));
}

const findSingleMusicDetails = async (req, res) => {
    const musicId = req.params['musicId']
    const type = req.params['type']

    let response = await axios.get(`${SPOTIFY_BASE_URL}/${type}s/${musicId}`);

    if (response.data?.error?.status === 401 && response.data?.error?.message === "The access token expired") {
        spotifyAuth().then(() => {
            findSingleMusicDetails(req, res);

        });
    }

    res.send(_formatMusicDetails(response.data, type));
}

export default (app) => {
    app.get('/music/:searchTerm', findAllMusic);
    app.get('/musicDetails/:type/:musicId', findSingleMusicDetails);
};