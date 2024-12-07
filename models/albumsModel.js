const axios = require("axios");

const api = axios.create({
  baseURL: "https://rss.applemarketingtools.com/api/v2/gb",
});

function fetchTopAlbums() {
  return api.get("/music/most-played/100/albums.json").then(({ data }) => {
    const albums = data.feed.results;
    if (albums.length === 0) {
      return Promise.reject({ status: 400, msg: "No albums found." });
    }
    return albums;
  });
}

function fetchAlbumById(id) {
  return api
    .get(`/music/most-played/100/albums.json?id=${id}`)
    .then(({ data }) => {
    const matchingAlbum = data.feed.results.find(album => album.id === id);
    return matchingAlbum || null;
  });
}

module.exports = { fetchTopAlbums, fetchAlbumById };
