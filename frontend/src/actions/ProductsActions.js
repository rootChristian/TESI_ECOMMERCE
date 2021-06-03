/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import axios from 'axios';

export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const POST_PRODUCTS = "POST_PRODUCTS";
export const GET_PRODUCTS_BY_CATEGORIES = "GET_PRODUCTS_BY_CATEGORIES";

export const postProductsRegistration = (formData) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}api/products/registration`, formData)
            .then((res) => {
                dispatch({ type: POST_PRODUCTS, payload: res.formData })
            })
            .catch((err) => console.log(err));
    }
}

export const getProduct = (data) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/products/searchByName?name=${data}`)
            .then((res) => {
                dispatch({ type: GET_PRODUCT, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}

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

export const getProductsByCategories = (data) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/products/byCategory/${data}`)
            .then((res) => {
                dispatch({ type: GET_PRODUCTS_BY_CATEGORIES, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}