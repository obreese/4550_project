import axios from 'axios';
import fetch from 'node-fetch'
import { Headers } from 'node-fetch';

export const spotifyAuth = async () => {
  const client_id = process.env.SPOTIFY_API_CLIENT_ID
  const client_secret = process.env.SPOTIFY_API_CLIENT_SECRET
  
  const auth = (Buffer.from(client_id + ':' + client_secret).toString('base64'));
  
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Basic ${auth}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  }
  
  let res = await fetch("https://accounts.spotify.com/api/token?grant_type=client_credentials", requestOptions);
  res = await res.json();

  let authToken = res.access_token;
  axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`
  axios.defaults.headers.common['Accept-Encoding'] = `application/json`

}