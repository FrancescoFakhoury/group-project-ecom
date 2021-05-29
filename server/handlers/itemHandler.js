const items = require("../data/items.json");
//
//retrieving all items from data/items
const handleItems = (req, res) => {
  res.status(200).json({ status: 200, data: items });
};
//

//updating inventory when making a purchase
const handleInventory = (req, res) => {
  try {
    console.log(req.body);
    const { _id } = req.body;
    console.log(_id);
    // const foundItemArray = [];
    // const foundItem = items.find((item) => {
    // console.log(_id);
    //   if (item._id === parseInt(_id)) {
    //     foundItemArray.push(item);
    //   }
    // });
    // console.log(foundItemArray[0]);

    _id.forEach((item) => {
      items.find((e) => {
        if (e._id === parseInt(item)) {
          console.log("numInStock before", e.numInStock);
          e.numInStock--;
          console.log("numInStock after", e.numInStock);
        }
      });
    });
    return res
      .status(200)
      .json({ status: 200, message: "success :), purchased" });
    // if ((foundItem[0].numInStock = numInStock)) {
    //   //handleClick will be req.body numInstock & _id values
    //   //update the numInStock with handleClick
    //   res.status(200).json({ status: 200, data: foundItem[0] });
    // } else {
    //   res.status(404).json({ status: 404, message: "item not found"[0] });
    // }
  } catch (error) {
    res.status(500).json({ status: 500, message: "you have failed :'(" });
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
