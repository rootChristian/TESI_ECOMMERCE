/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

const userModel = require('../models/user_model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
    const users = await userModel.find().select('-password');
    res.status(200).json(users);
};

module.exports.userInfo = async (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id))
        return res.status(403).send('Invalid ID: ' + id);
    userModel.count({ _id: id }, (err, count) => {
        if (count <= 0) {
            return res.status(400).json({ errorMessage: " USER NOT FOUND " });
        }
        try {
            userModel.findById(id, (err, docs) => {
                if (!err) res.send(docs);
            }).select('-password');
        } catch (err) {
            return res.status(403).json({ message: err });
        }
    });
};

module.exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id))
        return res.status(403).send('Invalid ID: ' + id);
    userModel.count({ _id: id }, (err, count) => {
        if (count <= 0) {
            return res.status(400).json({ errorMessage: " USER NOT FOUND " });
        }
        try {
            userModel.deleteOne({ _id: id }).exec();
            res.status(200).json({ message: 'User deleted.' });
        } catch (err) {
            return res.status(403).json({ message: err });
        }
    });
};