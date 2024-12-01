const axios = require("axios");

const api = axios.create({
  baseURL: "https://rss.applemarketingtools.com/api/v2/gb",
});

function fetchTopAlbums() {
  return api.get("/music/most-played/100/albums.json").then(({ rows }) => {
    console.log(rows, "model");
    if (rows.length === 0) {
      return Promise.reject({ status: 400, msg: "No albums found" });
    }
    return rows;
  });
}

module.exports = {fetchTopAlbums}