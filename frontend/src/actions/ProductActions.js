/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import axios from 'axios';

export const PRODUCT_DETAILS = "PRODUCT_DETAILS";

export const getProductDetails = (data) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/products/searchByName?name=${data}`)
            .then((res) => {
                dispatch({ type: PRODUCT_DETAILS, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}