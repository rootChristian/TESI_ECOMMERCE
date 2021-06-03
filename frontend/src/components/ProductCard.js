/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import React from "react";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { getCartProduct } from "../actions/CartsActions";
import { getProductDetails } from "../actions/ProductActions";
import { Card, Button } from "react-bootstrap"
import { connect } from "react-redux"

function ProductCard(props) {
    console.log(props)
    const dispatch = useDispatch()
    const productDetails = props.product 

    const handleOnclick = (product) => {
        //debugger
        const data = product
        if (data) {
            console.log("Product selected. =>", data)
            dispatch(getCartProduct(data))
        } else {
            console.log("Product not selected!")
        }
    }

    const handleOnclickDetails = (product) => {
        //debugger
        const data = product
        if (data) {
            console.log("Product selected. =>", data)
            dispatch(getProductDetails(data))
        } else {
            console.log("Product not selected!")
        }

    }

    return (
        <Card className="text-center p-0 m-0">
            <Card.Body>
                <Link to="/productInfosPage">
                    <Card.Img onClick={() => handleOnclickDetails(productDetails.name)} src={`../../img/uploads/${productDetails.productPicture}`} alt="" style={{ width: 500, height: 200 }} className="card-img-top w-100" />
                </Link>
                <Card.Title>
                    {productDetails.name}
                </Card.Title>
                <Card.Text>
                    {productDetails.description.substr(0, 25)} ...
                </Card.Text>
                <Card.Text style={{ color: 'red' }}>
                    &euro; {productDetails.price}
                </Card.Text>
                {productDetails.quantity > 0 && (
                    <Button variant="primary" onClick={() => handleOnclick(productDetails.name)}>Add to cart</Button>
                )}
                <Card.Footer className="text-muted">
                    {productDetails.quantity > 0 ? (
                        <span className="bg-#99ff99" style={{ color: '#00ff00' }}>In Stock</span>
                    ) : (
                        <span className="bg-#99ff99" style={{ color: 'red' }}>Unavailable</span>
                        )}
                </Card.Footer>
            </Card.Body>
        </Card>
    )
};

export default connect(null, { getCartProduct })(ProductCard)