/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

const mongoose = require('mongoose');
require('dotenv').config({path: './config/.env'});


//Database connection
const mongodbURL = 'mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_USER_PASS+'@unipr.g2qmr.mongodb.net/'+process.env.DATABASE+'?retryWrites=true&w=majority'

mongoose.connect(mongodbURL, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true,  useUnifiedTopology: true })
        .then(()=> {
            console.log('We are using database: ' +process.env.DATABASE);
            console.log('Database connection is ready...');
        })
        .catch((err)=>{
            console.log('Database connection is failled...\n', err);
        })
