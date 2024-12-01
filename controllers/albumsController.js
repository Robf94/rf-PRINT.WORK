const { fetchTopAlbums, fetchAlbumById } = require("../models/albumsModel");

function getTopAlbums(request, response, next) {
  fetchTopAlbums()
    .then((albums) => {
      response.status(200).send({ albums });
    })
    .catch((err) => {
      next(err);
    });
}

function getAlbumById(request, response, next) {
  const { id } = request.params;

  if (isNaN(id)) {
    return response.status(400).send({ msg: "album ID must be a number." });
  }

  fetchAlbumById(id)
    .then((album) => {
      response.status(200).send({ album });
    })
    .catch((err) => {
      if (err.status && err.msg) {
        response.status(err.status).send({ msg: err.msg });
      } else {
        next(err);
      }
    });
}

module.exports = { getTopAlbums, getAlbumById };
