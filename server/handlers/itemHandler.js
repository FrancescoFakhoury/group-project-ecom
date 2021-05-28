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
//
//
//
const handleCart = (req, res) => {
  const { _id } = req.body;
  const foundItem = items.filter((item) => {
    return item._id === _id;
  });
  if (foundItem[0]._id === _id) {
    res.status(200).json({ status: 200, message: "success" });
  } else {
    res.status(200).json({ status: 404, message: "item not found"[0] });
  }
};

//deleteItemFromCart doesn't work yet
const deleteItemFromCart = (req, res) => {
  const itemId = req.params;
  let cart = [];

  let specificItem = items.find((e) => {
    return e._id === itemId;
  });
  console.log("specific", specificItem);
  if (specificItem) {
    items.filter((item) => {
      if (item._id !== itemId) {
        cart.push(item);
      }
    });
    res.json(cart);
  } else {
    res.json({ status: 404, message: "error" });
  }
};

module.exports = {
  handleItems,
  handleInventory,
  handleCart,
  deleteItemFromCart,
};
