const items = require("../data/items.json");
//
//retrieving all items from data/items
const handleItems = (req, res) => {
  res.status(200).json({ status: 200, data: items });
};
//

//updating inventory when making a purchase
const handleInventory = (req, res) => {
  //the try part basically just try's something, if it fails it goes to the catch on line 29.
  try {
    //when you do this console.log, it will be _id: [id's of the items in the cart] because thats what is the body on line 29 of Cart.js which we are setting as the array.
    console.log(req.body);
    const { _id } = req.body;
    //this console.log is just destructing the req.body
    console.log(_id);
    //so we go through the array with the item id's and use a forEach on it, where item as the callback is just obviously a singular item in the array,
    //and we say if e._id from items.find === item (the parseInt basically turns item into an actual number (interger) and not a string)
    //then do e.numInstock -- (-1 everytime)
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
