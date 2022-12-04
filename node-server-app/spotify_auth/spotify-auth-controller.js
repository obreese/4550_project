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
  console.log(res)

  // let myHeaders = new Headers();
  // myHeaders.append("Authorization", `Basic ${client_id}:${client_secret}`);
  // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");


  // // let myHeaders = {
  // //   "Authorization": `Basic ${client_id}:${client_secret}`,
  // //   "Content-Type": "application/x-www-form-urlencoded",
  // // }

  // var urlencoded = new URLSearchParams();
  // urlencoded.append("grant_type", "client_credentials");

  // const requestOptions = {
  // method: "POST",
  // headers: myHeaders,
  // body: urlencoded,
  // redirect: 'follow'
  // }
  
  // let res = await fetch("https://accounts.spotify.com/api/token", requestOptions);
  // res = await res.json();
  // console.log(res)
  // return res.access_token; 

  // axios.post(`https://accounts.spotify.com/api/token`, requestOptions)

  // axios.post(`https://accounts.spotify.com/api/token`, {
  //   headers: {
  //     "Authorization": "Basic " + client_id + ":" + client_secret,
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   form: {
  //       grant_type: "client_credentials",
  //   },
  //   json: true,
  // })

  let authToken = res.access_token;
  axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`
  // axios.defaults.headers.common['Content-Type'] = `application/json`
  axios.defaults.headers.common['Accept-Encoding'] = `application/json`

}