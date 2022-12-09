import axios from 'axios';
import fetch from 'node-fetch'
import { Headers } from 'node-fetch';

export const spotifyAuth = async () => {
  const client_id = 'd3cc2c02817d4c8d8ecfcbc9f055041d';
  const client_secret = 'badc8fcb10a94e78a8485b47f80715db';
  
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Basic ZDNjYzJjMDI4MTdkNGM4ZDhlY2ZjYmM5ZjA1NTA0MWQ6YmFkYzhmY2IxMGE5NGU3OGE4NDg1YjQ3ZjgwNzE1ZGI`);
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