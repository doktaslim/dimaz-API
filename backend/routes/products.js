const express = require('express');
const router = express.Router();

const productsCtrl = require('../controllers/products');


router.post('/', productsCtrl.postProduct);
router.get('/:id', productsCtrl.getOneProduct);
router.put('/:id', productsCtrl.updateProduct);
router.delete('/:id', productsCtrl.deleteProduct);
router.get('/' + '',  productsCtrl.getAllProducts);


module.exports = router;