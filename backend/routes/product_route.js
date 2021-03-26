/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product_controller');
const {upload} = require('../middleware/multer')

//method to add a new product
router.post('/registration', upload.single('productPicture'), productController.addNewProduct);
    
//method getAllProducts
router.get('/', productController.getAllProducts);

//method to get all Products by category
router.get('/byCategory/:id', productController.productByCategory);

//method to get product Infos
router.get('/:id', productController.productInfos);

//method to delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;