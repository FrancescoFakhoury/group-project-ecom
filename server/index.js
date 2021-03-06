"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  handleItems,
  handleInventory,
  handleCart,
  deleteItemFromCart,
} = require("./handlers/itemHandler");
const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
  .get("/products/all", handleItems)
  .patch("/products/update", handleInventory)
  .put("/cart/add/", handleCart)
  .delete("/cart/delete/:itemId", deleteItemFromCart)
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
