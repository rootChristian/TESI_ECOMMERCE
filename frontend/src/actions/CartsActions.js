/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import axios from 'axios';
export const CART_PRODUCT = "CART_PRODUCT";
export const ADD_CART_PRODUCT = "ADD_CART_PRODUCT";
export const GET_NUMBERS_BASKET = "GET_NUMBERS_BASKET";

export const getNumbers = () => {
    return (dispatch) => {
        console.log("GETTING ALL BASKET NUMBERS")
        dispatch({ type: GET_NUMBERS_BASKET })
    }
}

export const getCartProduct = (data) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/products/searchByName?name=${data}`)
            .then((res) => {
                console.log("ADDING PRODUCT : ", data)
                dispatch({ type: CART_PRODUCT, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}