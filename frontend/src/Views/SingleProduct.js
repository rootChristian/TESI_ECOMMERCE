import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap"
import { getCartProduct } from "../actions/CartsActions";

function SingleProduct() {
    const productInfos = useSelector((state) => state.productDetailsReducer);
    let content;
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1);

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

    if (productInfos.length > 0) {
        content = productInfos.map(product => (
            <div key={product.id} className="row align-items-start">
                < div class="col">
                    <Card.Img src={`../../img/uploads/${product.productPicture}`} alt="" style={{ width: 800, height: 300 }} className="card-img-top w-100" />
               </div>
                <Card.Body style={{ width: '10rem' }}>
                    <Card.Header>
                        {product.name}
                    </Card.Header>
                    <Card.Text>
                        {product.description}
                    </Card.Text>

                    <Card.Text style={{ color: 'red' }}>
                        &euro; {product.price}
                    </Card.Text>
                    <Card.Text>
                        Qty:  {product.quantity > 0 && (
                            <>
                                <select
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                >
                                    {[...Array(product.quantity).keys()].map(
                                        (x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        )
                                    )}
                                </select>
                                <div>
                                    <Button variant="primary" onClick={() => handleOnclick(product.name)}>Add to cart</Button>
                                </div>
                            </>

                        )}
                    </Card.Text>
                    <Card.Footer className="text-muted">
                        {product.quantity > 0 ? (
                            <span style={{ color: 'green' }}>In Stock</span>
                        ) : (
                                <span style={{ color: 'red' }}>Unavailable</span>
                            )}
                    </Card.Footer>

                </Card.Body>
                
            </div>
        )
        )
    } else {
        content = (
            <Card.Body> 
                Product not found or There was an error loading the content. Please try eagain
            </Card.Body>)
    };

    return (
        <Card className="text-center" border="secondary" >
            {content}
            <Link to="/"><button type="button" class="btn btn-success">Back to home</button></Link>
        </Card>
    )
        
};

export default SingleProduct