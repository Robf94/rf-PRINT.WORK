const controllers = require("../controllers/albumsController");
const albumsRouter = require("express").Router();

// GET top 100 albums
albumsRouter.get("/albums", controllers.getTopAlbums);

module.exports = albumsRouter;
