const { fetchTopAlbums, fetchAlbumById } = require("../models/albumsModel");

function getTopAlbums(request, response, next) {
  const page = parseInt(request.query._page) || 1;
  const limit = 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  fetchTopAlbums()
    .then((albums) => {
      const paginatedAlbums = albums.slice(startIndex, endIndex);
      response.status(200).send({ paginatedAlbums });
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
