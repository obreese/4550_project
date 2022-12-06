import axios from "axios";
const BASE_URL = 'http://localhost:4000'

export const findAllMusic = async (searchTerm) => {
    const response = await axios.get(`${BASE_URL}/music/${searchTerm}`)
    const music = await response.data
    return music
}

export const findMusicDetails = async (musicId, type) => {
    type = type === 'song' ? 'track' : type;
    const response = await axios.get(`${BASE_URL}/musicDetails/${type}/${musicId}`)
    const musicDetails = await response.data
    return musicDetails // TODO GO GET POSTS
}