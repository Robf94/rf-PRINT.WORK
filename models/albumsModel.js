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
  return api.get(`/music/most-played/100/albums.json?id=${id}`).then(({ data }) => {
    const album = data.feed.results.find((entry) => entry.id === id);
    if (!album) {
      return Promise.reject({
        status: 404,
        msg: "Album does not exist, or is not currently in the top 100.",
      });
    }
    return album;
  });
}

module.exports = { fetchTopAlbums, fetchAlbumById };
