/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

const categoryModel = require('../models/category_model');
const productModel = require('../models/product_model');
const ObjectID = require('mongoose').Types.ObjectId;
const sharp = require('sharp');
const fs = require('fs')

module.exports.addNewProduct = async (req, res, next) => {
    /*
    fs.access('../frontend/public/img/uploads/', (err) => {
        if (err) { fs.mkdirSync('../frontend/public/img/uploads/') }
    })
    
    sharp(req.file.buffer).toFile('../frontend/public/img/uploads/' + req.file.originalname + '-' + Date.now() + '.jpg');
    */
    const productPicture = req.file.originalname;
    const { name, description, price, category, quantity } = req.body;

    try {
        const existProduct = await productModel.findOne({ name });
        if (existProduct) {
            return res.status(400).json({ errorMessage: " PRODUCT ALREADY EXIST ", });
        }
        const existCategory = await categoryModel.findOne({ _id: category });
        if (!existCategory)
            return res.status(400).json({ errorMessage: " CATEGORY NOT FOUND!!! " });
        const newproduct = await productModel.create({ name, description, price, category, quantity, productPicture });
        res.status(200).json(newproduct.name + " added successfully in " + existCategory.name + "' products !!!");;
        console.log("NEW PRODUCT ADDED !!! ");
    } catch (err) {
        console.log("ERROR ON ADDING A NEW PRODUCT: ", err);
        res.status(500).json({
            errorMessage: " Failed !!! please try again later",
        });
    };

    

};
/*
//add a new product resizing the image
module.exports.addNewProduct = async (req, res, next) => {
    //console.log('file', req.file);
    fs.access('../frontend/public/img/uploads/', (err) => {
        if (err) { fs.mkdirSync('../frontend/public/img/uploads/') }
    })
    console.log(req.file);
    productPicture = req.file.originalname + '-' + Date.now() + '.jpg';
    sharp(req.file.buffer).toFile('../frontend/public/img/uploads/' + productPicture);


    const { name, description, price, category, quantity } = req.body;
    
    try {
        const existProduct = await productModel.findOne({ name });
        if (existProduct) {
            return res.status(400).json({ errorMessage: " PRODUCT ALREADY EXIST ", });
        }
        const existCategory = await categoryModel.findOne({ _id: category });
        if (!existCategory)
            return res.status(400).json({ errorMessage: " CATEGORY NOT FOUND!!! "});
        const newproduct = await productModel.create({ name, description, price, category, quantity, productPicture });
        res.status(200).json(newproduct.name + " added successfully in " + existCategory.name + "' products !!!");;
        console.log("NEW PRODUCT ADDED !!! ");
    } catch (err) {
        console.log("ERROR ON ADDING A NEW PRODUCT: ", err);
        res.status(500).json({
            errorMessage: " Failed !!! please try again later",
        });
    };
};
*/
// list of all products
module.exports.getAllProducts = async (req, res) => {
    try {
        /*const products = await productModel.find({});
        res.status(200).json({products});
        */
        productModel.find((err, docs) => {
            if (!err) res.send(docs);
        });
    } catch (err) {
        console.log("ERROR ON READING ALL PRODUCTS: ", err);
        res.status(500).json({
            errorMessage: " Failed !!! please try again later",
        });
    };
};

//list of all products by id category
module.exports.productByCategory = async (req, res) => {
    const idCategory = req.params.id;
    if (!ObjectID.isValid(idCategory))
        return res.status(403).send('Invalid ID: ' + idCategory);
    const existCategory = await categoryModel.findOne({ _id: idCategory });
    if (!existCategory)
        return res.status(400).json({ errorMessage: " CATEGORY NOT FOUND!!! " });
    console.log(existCategory._id);
    try {
        const byCategory = await productModel.find({ category: existCategory._id });
        if (byCategory)
            res.send(byCategory);
    } catch (err) {
        return res.status(403).json({ message: err });
    }
};


// new implementation info product by id product
module.exports.productInfos = (req, res) => {
    const nameQuery = req.query.name;
    //console.log("value: ", nameQuery);
    try {
        productModel.find({ name: nameQuery }, (err, docs) => {
            if (!err) res.send(docs);
        });
    } catch (err) {
        return res.status(403).json({ message: err });
    }

};

// info product by id product
module.exports.productDetails = async (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id))
        return res.status(403).send('Invalid ID: ' + id);
    productModel.count({ _id: id }, (err, count) => {
        if (count <= 0) {
            return res.status(400).json({ errorMessage: " PRODUCT NOT FOUND " });
        }
        try {
            productModel.findById(id, (err, docs) => {
                if (!err) res.send(docs);
            });
        } catch (err) {
            return res.status(403).json({ message: err });
        }
    });
};

// delete product by id product
module.exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id))
        return res.status(403).send('Invalid ID: ' + id);
    productModel.count({ _id: id }, (err, count) => {
        if (count<=0) {
            return res.status(400).json({ errorMessage: " PRODUCT NOT FOUND " });
        }
        try {
                productModel.deleteOne({ _id: id }).exec();
            res.status(200).json({ message: 'product deleted' });
        } catch (err) {
            return res.status(403).json({ message: err });
        }
    });
};