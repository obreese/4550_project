import axios from "axios";

const POST_API_URL = 'http://localhost:4000/posts'

const api = axios.create({withCredentials: true});

export const findPostById = async (pid) => {
    const response = await api.get(`${POST_API_URL}/${pid}`)
    const post = response.data
    return post
}

export const findPostsByMusicId = async (music_id) => {
    const response = await api.get(`${POST_API_URL}/byMusicId/${music_id}`)
    const post = response.data
    return post
}

export const findPostsByUserId = async (uid) => {
    const response = await api.get(`${POST_API_URL}/byUserId/${uid}`)
    const post = response.data
    return post
}
