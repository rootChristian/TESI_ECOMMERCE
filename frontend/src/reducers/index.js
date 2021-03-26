/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import { combineReducers } from 'redux'
import userReducer from './UserReducer'
import categoriesReducer from './CategoriesReducer'
import productsReducer from './ProductsReducer'

export default combineReducers({
    userReducer,
    categoriesReducer,
    productsReducer,
})