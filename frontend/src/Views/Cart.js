/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/
import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { UidContext } from "../components/AppContext";
import { Card, Col, Row, Button, Container } from "react-bootstrap"

const Cart = () => {
    const uid = useContext(UidContext);
    const [qty, setQty] = useState(1);
    const cartsData = useSelector((state) => state.cartsReducer);
    const data = cartsData.cart;

    const listData = data.map(product => {
        return (
            product.map(pro => {

                return (<>
                    <Row>
                        <Col>
                            <Row className="p-1 mb-1 text-center text-white">
                                <Col className="p-1 mb-1 text-center">
                                    <Card.Img src={`../../img/uploads/${pro.productPicture}`} alt="" style={{ width: 80, height: 150 }} className="card-img-top w-100" />
                                </Col>
                                <Col>
                                    <Card.Title className="p-1 mb-1 text-center" style={{ color: 'black' }}>{pro.name}</Card.Title>
                                    <Row className="p-1 mb-1 text-center">
                                        <Col>Qty</Col>
                                        <Col>
                                            {pro.quantity > 0 && (
                                                <>
                                                    <select
                                                        value={qty}
                                                        onChange={(e) => setQty(e.target.value)}
                                                    >
                                                        {[...Array(pro.quantity).keys()].map(
                                                            (x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </>
                                            )}
                                        </Col>
                                    </Row>
                                    <Row className="p-1 mb-1 text-center">
                                        <Col>Price</Col>
                                        <Col>&euro; {pro.price}</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </>)
            })
        )
    })

    return (
        <Container className="bg-secondary">
                <Card>
                    <Row className="bg-dark">
                        <Card.Title className="p-2 mb-1 text-white text-center">CART SHOPPING </Card.Title>
                        <Col><Card.Title className="text-white text-center">Details</Card.Title></Col>
                        <Col><Card.Title className="text-white text-center">Summary</Card.Title></Col>
                    </Row>
                <Row className="bg-secondary">
                        <Col> {listData}</Col>
                        <Col className="bg-secondary">
                            <Row className="p-2 mb-3 text-center text-white">
                                <Col>TOTAL ITEMS</Col>
                                <Col>{cartsData.basketNumbers}</Col>
                            </Row>
                            <Row className="p-3 mb-2 bg-danger text-center text-white">
                                <Col>TOTAL PRICE</Col>
                            <Col>&euro; {cartsData.totalPrice}</Col>
                            </Row>
                            <Row>
                                <Col className="p-2 mb-3 btn float-left">
                                    <Link to="/">
                                    <Button className="btn btn-primary">CONTINUE</Button>
                                    </Link>
                                </Col>
                                <Col className="btn float-right">
                                {uid ? (
                                    <Link to="#">
                                        <Button className="btn btn-success">CHECKOUT</Button>
                                    </Link>
                                ) : (
                                    <Link to="/sign-in">
                                        <Button className="btn btn-success">CHECKOUT</Button>
                                    </Link>
                                )}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Container>
    )
}
    
export default Cart;