/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

const userModel = require('../models/user_model');
const jwt = require('jsonwebtoken');
const { signUpErrors, signInErrors } = require('../utils/errors');

const maxAge = 1 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
};

//registration user on the database
module.exports.signUp = async (req, res) => {
    const { nickname, email, password } = req.body;
    //console.log('registration successfully', req.body);
    try {
        const user = await userModel.create({ nickname, email, password });
        res.status(200).json({ user: user._id });
    } catch (err) {
        //console.log('Error register', err);
        const errors = signUpErrors(err);
        res.status(201).send({ errors });
    }
};

module.exports.signIn = async (req, res) => {
    const { email, password } = req.body
    
    try {
        const user = await userModel.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge });
        res.status(200).json({ user: user._id })
    } catch (err) {
        const errors = signInErrors(err);
        res.status(201).json({ errors });
    }
};

module.exports.Logout = async (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.redirect('/')
};