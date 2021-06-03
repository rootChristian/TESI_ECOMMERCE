/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import axios from 'axios';

export const GET_CATEGORIES = "GET_CATEGORIES";

export const getCategories = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/categories/`)
            .then((res) => {
                dispatch({ type: GET_CATEGORIES, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}
