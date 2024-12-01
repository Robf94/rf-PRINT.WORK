const express = require("express");
const cors = require("cors");
const routers = require("./routers/routerIndex.js");

// import error handlers
const app = express();
app.use(cors());

// Albums
app.use("/api/albums", routers.albumsRouter);

module.exports = app;
