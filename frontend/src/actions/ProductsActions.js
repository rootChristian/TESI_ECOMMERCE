/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import axios from 'axios';

export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/products/`)
            .then((res) => {
                dispatch({ type: GET_PRODUCTS, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}

