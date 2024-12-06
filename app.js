const express = require("express");
const cors = require("cors");
const routers = require("./routers/routerIndex.js");
const { getAllEndpoints } = require("./controllers/endpointsController.js");

// import error handlers
const app = express();
app.use(cors());

// List of endpoints
app.get("/api", getAllEndpoints);

// Albums
app.use("/api/albums", routers.albumsRouter);

app.all("/*", (request, response) => {
  response.status(404).send({ msg: "Route not found!" });
});

module.exports = app;
