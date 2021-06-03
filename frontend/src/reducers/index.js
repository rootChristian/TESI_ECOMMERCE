/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import { combineReducers } from 'redux'
import userReducer from './UserReducer'
import categoriesReducer from './CategoriesReducer'
import productsReducer from './ProductsReducer'
import cartsReducer from './CartReducer'
import productDetailsReducer from './ProductReducer'

export default combineReducers({
    userReducer,
    categoriesReducer,
    productsReducer,
    productDetailsReducer,
    cartsReducer,
})