const items = require("../data/items.json");
//
//retrieving all items from data/items
const handleItems = (req, res) => {
  res.status(200).json({ status: 200, data: items });
};
//
//updating inventory when making a purchase
const handleInventory = (req, res) => {
  const { _id, numInStock } = req.body;
  //   console.log(_id, numInStock);
  const foundItem = items.filter((item) => {
    return item._id === _id;
  });
  if ((foundItem[0].numInStock = numInStock)) {
    //handleClick will be req.body numInstock & _id values
    //update the numInStock with handleClick
    console.log(foundItem);
    res.status(200).json({ status: 200, data: foundItem[0] });
  } else {
    res.status(200).json({ status: 404, message: "item not found"[0] });
  }
};

module.exports = { handleItems, handleInventory };
