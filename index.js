const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var offerRouter = require("./routers/offer.router.js");

const port = process.env.PORT || 8080;
const mongoURI = process.env.MONGOURI || require("./secrets").MONGOURI;

server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

// connect to the database
mongoose.connect(mongoURI);

server.get("/", function(req, res) {
  res.sendFile("index.html", {root: __dirname + "/public/html"});
});

server.use(offerRouter);

server.listen(port, function(){
  console.log("now listening on port: ", port);
});
