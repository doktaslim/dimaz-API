const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');

const app = express();
app.use(bodyParser.json());


<<<<<<< HEAD
const uri = 'mongodb+srv://doktaslim:escalzepat@dimaz-enterprise-2ayww.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
}).catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
=======
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI || "mongodb+srv://doktaslim:escalzepat@dimaz-enterprise-2ayww.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log("Successfully Connected to Mongodb Atlas");
    client.close();
>>>>>>> e7ba43fc3230277ffec3b5e757fcb306284e2252
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