import axios from 'axios';

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

const findAllMusic = async (req, res) => {
  const searchTerm = req.params['searchTerm']
  const searchType = 'track';
  let response = await axios.get(`${SPOTIFY_BASE_URL}/search?q=${searchTerm}&type=${searchType}`);
  const music = await response.data.tracks.items;
  console.log(music)
  res.send(music);
}

export default (app) => {
  app.get('/music/:searchTerm', findAllMusic);
};
