const express = require("express")
const app = express()
const routers = require("./routers/routerIndex.js")

// import error handlers
// cors?

// Albums
app.use("/api/items", routers.getTopAlbums);