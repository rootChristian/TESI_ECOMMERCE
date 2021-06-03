/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import React, { useState } from "react";
import { CART_PRODUCT, GET_NUMBERS_BASKET } from "../actions/CartsActions";
import { useSelector } from "react-redux";

//const proData = useSelector((state) => state.productsReducer);

//console.log("ALL PRO >", proData)

const initialState = {
    products: {}, cart:[], basketNumbers : 0 , totalPrice: 0};


export default function cartsReducer(state = initialState, action) {

    switch (action.type) {
        case CART_PRODUCT:

            let total = 0;

            action.payload.map((p) => {
                total += p.price
            });

            return {
                cart: [...state.cart, action.payload],
                basketNumbers: state.basketNumbers + 1,
                totalPrice: state.totalPrice += total
            }

        case GET_NUMBERS_BASKET: 
            return {
                ...state
            }

        default:
            return state;
    }
}
