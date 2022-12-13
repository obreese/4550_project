import axios from "axios";

const POST_API_URL = 'http://localhost:4000/posts'

const api = axios.create({withCredentials: true});

export const findPostById = async (pid) => {
    const response = await api.get(`${POST_API_URL}/${pid}`)
    const post = response.data
    return post
}


