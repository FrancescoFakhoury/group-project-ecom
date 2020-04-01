# Wearables E-Commerce Project

You will make use of _everything_ that you have learned thus far in the bootcamp to build an e-commerce app that will showcase all of the provided _wearables_ items.

## MVP

### Frontend Requirements

Users should be able to

- view all items in the _database_.
- purchase items that are in stock.
- search for items.
- view a cart of their items.
- edit cart before completing the purchase.
- view the app on a variety of devices. _app should look decent an all screen sizes._

### Backend Requirements

The Node server should

- be RESTful (use the right method for the right job)
- provide the FE with the required data in a succinct and organized way.
- handle user authentication
- keep a record of the user (data, purchases, etc).
- update the inventory as users make purchases.

## About the Data

All about Wearables!
You will find 349 items in the `_data/items.json` file. The data is mostly clean, but there could be some irregularities, i.e. empty values, values that we really don't need. _This is common in large databases, and something that we have to deal with._

### Item Object

```js
  {
    "name": "Barska GB12166 Fitness Watch with Heart Rate Monitor",
    "price": "$49.99",
    "body_location": "Wrist",
    "category": "Fitness",
    "id": 6543,
    "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHB...<REST_OF_IMAGE_ENCODING>",
    "numInStock": 9,
    "companyId": 19962
  },
```

### Company Object

```js
  {
    "name": "Barska",
    "url": "http://www.barska.com/",
    "country": "United States",
    "id": 19962
  }
```
