const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');

const app = express();
app.use(bodyParser.json());


const uri = process.env.MONGODB_URI || 'mongodb+srv://doktaslim:escalzepat@dimaz-enterprise-2ayww.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
}).catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
});


//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use('/api/products', productRoutes);

module.exports = app;