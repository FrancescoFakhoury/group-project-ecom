const items = require("../data/items.json");
const companies = require("../data/companies.json");

const updateCart = (req, res) => {
  let {id} = req.body;
  let newArr = [];

  const addItem = items.filter((e) => {
    if (e._id === id) {
      newArr.push(e);
    }
  });

    // const addItem = items.find((e) => {
    //     return e._id === id
    // })

  if (addItem) {
    res.status(200).json({ status: 200, data: newArr , message: "woo" });
  } else {
    res.status(404).json({ status: 404, message: "no" });
  }
};

module.exports = { updateCart };
