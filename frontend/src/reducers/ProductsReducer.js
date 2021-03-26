/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import { GET_PRODUCTS } from "../actions/ProductsActions";

const initialState = {};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}

