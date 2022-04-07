const express = require('express');
const productRouter = require('./routes/productRouter');
const cartRouter = require('./routes/cartRouter');
// import express from 'express'
// import productRouter from './routes/productRouter'
// import cartRouter from './routes/cartRouter'


const app = express();

//const ProductManager=require('./Manager/productManager.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static(__dirname+'/public'));
app.use('/api', productRouter);
app.use('/api', cartRouter);


const faker = require('faker');
// import faker from 'faker'

const { name, internet, } = faker;


app.use('/api/products-faker', function (req, res) {


    let objects = [];

    for (let i = 0; i < 100; i++) {
        objects.push({
            product: commerce.product(),
            name: commerce.productName(),
            price: commerce.price(),
            thumbnail: image.image()

        })
    }
    res.send(objects)


})




admin = false;


const PORT = 8080;
const server = app.listen(PORT, (req, res) => console.log(`Listening on PORT ${PORT}`))