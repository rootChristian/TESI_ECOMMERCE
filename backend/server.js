/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: './config/.env' });
const userRoutes = require('./routes/user_route');
const categoryRoutes = require('./routes/category_route');
const productRoutes = require('./routes/product_route');
require('./config/db');
const { checkUser, requireAuth } = require('./middleware/auth_middleware');
const cors = require('cors');
//const { Mongoose } = require('mongoose');
const app = express();
//const path = require('path');

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}
app.use(cors(corsOptions));

//use to formatter data in json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use('./uploads', express.static(path.join(__dirname,'uploads')));

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
});


//router after http://localhost:port/api/user# call all router
app.use('/api/users', userRoutes);

//router after http://localhost:port/api/category# call all router
app.use('/api/categories', categoryRoutes);

//router after http://localhost:port/api/product# call all router
app.use('/api/products', productRoutes);

//Server listen port connection
const port = process.env.PORT; 

app.listen(port, ()=>{
    console.log('******************************************'
    +`\n    Server is running on the port ${port}`+
              '\n******************************************');
})


