/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import { GET_CATEGORIES } from "../actions/CategoriesActions";

const initialState = {};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return action.payload;
        default:
            return state;
    }
}
