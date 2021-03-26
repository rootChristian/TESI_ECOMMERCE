/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

const router = require('express').Router();
const authController = require('../controllers/auth_controller');
const userController = require('../controllers/user_controller');


//method POST after http://localhost:port/api/user/register# ) call signUp
router.post('/registration', authController.signUp);

//method GET after http://localhost:port/api/user/logout# ) call logout
router.get('/logout', authController.Logout);

//method POST after http://localhost:port/api/user/login# ) call signIn
router.post('/login', authController.signIn);

//method GET after http://localhost:port/api/user/# ) call getAllUsers
router.get('/', userController.getAllUsers);

//method GET after http://localhost:port/api/user/:id# ) call userInfo
router.get('/:id', userController.userInfo);

//method DELETE after http://localhost:port/api/user/:id# ) call deleteUser
router.delete('/:id', userController.deleteUser);

module.exports = router;