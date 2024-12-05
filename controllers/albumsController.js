const { fetchTopAlbums, fetchAlbumById } = require("../models/albumsModel");

function getTopAlbums(request, response, next) {
  const page = parseInt(request.query.page);
  const limit = parseInt(request.query.limit) || 100;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  fetchTopAlbums()
    .then((albums) => {
      const paginatedAlbums = albums.slice(startIndex, endIndex);
      const results = {
        albums: paginatedAlbums,
      };

      if (endIndex < albums.length) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }

      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }

      response.status(200).send(results);
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
