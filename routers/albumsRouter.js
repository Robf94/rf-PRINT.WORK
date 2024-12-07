const express = require("express");
const { getAllAlbums, getTopAlbums, getAlbumById } = require("../controllers/albumsController");
const albumsRouter = express.Router();

// GET top 100 albums
albumsRouter.get("/", getAllAlbums);

// GET paginated albums
albumsRouter.get("/paginated", getTopAlbums);

// GET album by id
albumsRouter.get("/:id", getAlbumById);

module.exports = albumsRouter;
