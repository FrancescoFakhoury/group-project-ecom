"use strict";

const items = require("../data/items.json");
const companies = require("../data/companies.json");

const updateCart = (req, res) => {
  let { name, price, id, imageSrc } = req.body;
  const newArr = [];

  const addItem = items.filter((e) => {
    if (e._id === id) {
      newArr.push(e);
    }
  });

  if (addItem) {
    res.status(200).json({ status: 200, data: newArr, message: "woo" });
  } else {
    res.status(404).json({ status: 404, message: "error" });
  };
};

module.exports = { updateCart };
