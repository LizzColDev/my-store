const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();

const router = express.Router();

app.get('/', (req, res) =>{
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      Image: faker.image.url(),
    });
  }

  res.json(products);
});

// app.get('/filter', (req, res) => {

// });

module.exports = router;

