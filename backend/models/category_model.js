/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 30,
            unique: true
        }
    },
    {
        timestamps: true,
    }
);

const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel;