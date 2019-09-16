const Product = require('../models/product')

exports.postProduct =  (req, res, next) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save().then(() => {
        res.status(201).json({
            message: 'Product post saved successfully!'
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
}


exports.getOneProduct = (req, res, next) => {
    Product.findOne({_id: req.params.id}).then((product) => {
        res.status(200).json(product);
    }).catch((error) => {
        res.status(404).json({
            error: error
        });
    });
}


exports.updateProduct = (req, res, next) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    Product.updateOne({_id: req.params.id}, product).then(() => {
        res.status(201).json({
            message: 'Product updated successfully!'
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
}


exports.deleteProduct = (req, res, next) => {
    Product.deleteOne({_id: req.params.id}).then(() => {
        res.status(200).json({
            message: 'Product deleted!'
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
}


exports.getAllProducts = (req, res, next) => {
    Product.find().then((products) => {
        res.status(200).json(products);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
}