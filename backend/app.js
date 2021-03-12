const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const Product = require("./models/product");
const bodyParser = require('body-parser');

const app = express();
mongoose.connect("mongodb+srv://Priya:thatsgreat@cluster0.wjxsx.mongodb.net/mean?retryWrites=true&w=majority")

.then(() => {
  console.log("Connected to database!");
})
.catch(() => {
  console.log("Connection failed!");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
app.get('/api/products',(req,res,next) =>{
  //res.send('welcome to my server');
  Product.find()
  .then(documents => {
    res.status(200).json({
      product: documents
  });

  });
});
app.post('/api/products',bodyParser.json(), (req, res, next) => {
  const product = new Product({
    product: req.body.name,
  instock: req.body.stock,
  warehouse: req.body.place

  });
  console.log('req is '+JSON.stringify(req.body));
  console.log('product is '+JSON.stringify(product));
  /* [
  {id: 'ffuhghkj',
   product: 'first',
   instock: '2',
   warehouse: 'pune'
  },
  {id: 'ghfdfg',
  product: 'second',
  instock: '2',
  warehouse: 'pune'
 }
  ]*/
  product.save();
  res.status(201).json({message:'Posts added successfully',
  product: product
});

  });



  module.exports = app;
