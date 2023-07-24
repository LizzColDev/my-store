const express = require('express');
const ProductsService = require('../services/productsService');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) =>{
  const products = service.find();
  res.json(products);
});

// app.get('/filter', (req, res) => {

// });

router.get('/:id', (req, res) => {

  const { id } = req.params;
  const product = service.findOne(id);

  if(!product){
    res.status(404).json({
      message: 'Product not found'
    })
  }
  res.json(product);
})

router.post('/', (req, res)=>{
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', (req, res)=>{
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  })
})

router.delete('/:id', (req, res)=>{
  const {id} = req.params;
  res.json({
    message: 'deleted',
    id
  })
});

module.exports = router;

