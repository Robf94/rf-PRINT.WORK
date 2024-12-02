const express = require("express");
const { getTopAlbums, getAlbumById } = require("../controllers/albumsController");
const albumsRouter = express.Router();

// GET top 100 albums
albumsRouter.get("/", getTopAlbums);

// GET album by id
albumsRouter.get("/:id", getAlbumById);

module.exports = albumsRouter;
