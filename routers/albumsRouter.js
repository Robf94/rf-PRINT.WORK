const express = require("express");
const { getTopAlbums } = require("../controllers/albumsController");
const albumsRouter = express.Router();

// GET top 100 albums
albumsRouter.get("/", getTopAlbums);

module.exports = albumsRouter;
