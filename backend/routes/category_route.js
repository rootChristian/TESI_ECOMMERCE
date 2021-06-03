/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

const router = require('express').Router();
const categoryController = require('../controllers/category_controller');

//method to create a new category
router.post('/registration', categoryController.addNewCategory);

//method getAllategories
router.get('/', categoryController.getAllCategories);

//method to delete a category
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;