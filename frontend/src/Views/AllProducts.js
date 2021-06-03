/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import React from "react";
import { useSelector } from "react-redux";
import ProductCard from '../components/ProductCard'

function Product() {
    const productsData = useSelector((state) => state.productsReducer)
    let content;

    if (productsData.length > 0) {
        content = productsData.map(prod => (
            <div key={prod.id} className="col-md-3">
                <ProductCard product={prod} />
            </div>
        )
        )
    } else if (productsData.error) {
        content = (<p> Product not found or There was an error loading the content. Please try eagain</p>)
    };
    return (

        <div className="container mt-0">
            <div className="row mb-5">
                <div className="col">
                    <h1 className="font-bold text-2xl mb-0">Our products</h1>
                </div>
            </div>
            <div className="row mt-0 p-0">
                         {content}
            </div>     
        </div>
        
    )
}

export default Product;