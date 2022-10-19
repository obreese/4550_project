// TODO storing this in plaintext is a fantastic idea

export const CLIENT_ID = "3e01fa3b3dc24f108ad7c3c6a6d449ad";

export const CLIENT_SECRET = "20e721eb0e31436fbcb7f70512282e39";

export const HEADERS = {};

export const URLS = {
  GET_ACCESS_TOKEN: "https://accounts.spotify.com/api/token",
  GET_BY_SEARCH_TERM: "",
};

export const REQUEST_OPTIONS = {
  POST_CLIENT_CREDENTIALS: {
    url: URLS.GET_ACCESS_TOKEN,
    headers: {
      Authorization: "Basic " + CLIENT_ID + ":" + CLIENT_SECRET,
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  },
};
