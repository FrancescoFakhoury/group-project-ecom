const items = require("../data/items.json");

const handleItems = (req, res) => {
  res.status(200).json({ status: 200, data: items });
};

module.exports = { handleItems };
