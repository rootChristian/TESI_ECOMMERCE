/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

const categoryModel = require('../models/category_model');
const ObjectID = require('mongoose').Types.ObjectId;

//add a new category
module.exports.addNewCategory = async (req, res) => {
	const { name } = req.body;

	try {
		const existCategory = await categoryModel.findOne({ name });
		if (existCategory) {
			//return res.status(400).json({ errorMessage: " CATEGORY ALREADY EXIST " });
			return res.status(400).send({ errorMessage: " CATEGORY ALREADY EXIST " });
		}
		const newcategory = await categoryModel.create({ name });
		//res.status(200).json(newcategory.name + ' category added successfully');
		res.status(200).send(newcategory.name + ' category added successfully');
	}
	catch (err) {
		console.log("ERROR ON ADDING A NEW CATEGORY: ", err);
		res.status(500).json({
			errorMessage: " Failed !!! please try again later",
		});
	};
};

//to see all the categories
module.exports.getAllCategories = async (req, res) => {
	try {
		/*const categories = await categoryModel.find({});
		res.status(200).json({ categories });
		*/
		categoryModel.find((err, docs) => {
			if (!err) res.send(docs);
		});
	} catch (err) {
		console.log("ERROR ON READING ALL CATEGORIES: ", err);
		res.status(500).json({
			errorMessage: " Failed !!! please try again later",
		});
	};
};

///to delete a categorie
module.exports.deleteCategory = async (req, res) => {
	const id = req.params.id;
	if (!ObjectID.isValid(id))
		return res.status(403).send('Invalid ID: ' + id);
	categoryModel.count({ _id: id }, (err, count) => {
		if (count <= 0) {
			return res.status(400).json({ errorMessage: " CATEGORY NOT FOUND " });
		}
		try {
			categoryModel.deleteOne({ _id: id }).exec();
			res.status(200).json({ message: 'Category deleted.' });
		} catch (err) {
			return res.status(403).json({ message: err });
		}
	});
};
