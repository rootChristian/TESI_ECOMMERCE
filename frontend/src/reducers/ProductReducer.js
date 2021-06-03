/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import { PRODUCT_DETAILS } from "../actions/ProductActions";

const initialState = {};

export default function productDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_DETAILS:
            return action.payload; 
        default:
            return state;
    }
}
