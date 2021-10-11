/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

const mongoose = require('mongoose');
require('dotenv').config({path: './config/.env'});
/*
mongoose
    .connect('mongodb+srv://unipr:'+process.env.DB_USER_PASS+'@unipr.g2qmr.mongodb.net/unipr_db',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
    )
    .then(() => console.log('Connect to MongoDB...'))
    .catch((err) => console.log('failed to connect to MongoDB...', err));
*/

mongoose.connect(
    'mongodb+srv://unipr:' + process.env.DB_USER_PASS + '@unipr.g2qmr.mongodb.net/unipr_db',
    async (err) => {
        if (err) console.log('failed to connect to MongoDB...', err);
        console.log("Connect to MongoDB...")
    }
)
