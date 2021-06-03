/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import { GET_PRODUCT, GET_PRODUCTS, POST_PRODUCTS, GET_PRODUCTS_BY_CATEGORIES } from "../actions/ProductsActions";

const initialState = {};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT:
            return action.payload;
        case GET_PRODUCTS:
            return action.payload;
        case POST_PRODUCTS:
            return [action.payload, ...state];
        case GET_PRODUCTS_BY_CATEGORIES:
            return action.payload;
        default:
            return state;
    }
}
