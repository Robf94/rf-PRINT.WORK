const { fetchTopAlbums } = require("../models/albumsModel");

function getTopAlbums(request, response, next) {
  fetchTopAlbums()
    .then((albums) => {
      console.log(albums, "controller");
      response.status(200).send({ albums });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = { getTopAlbums };
