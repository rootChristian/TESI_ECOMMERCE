/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import React, { useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
//import { UidContext } from "../components/AppContext";
import { Card, Col, Row, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser} from '@fortawesome/free-solid-svg-icons'

const Profil = () => {
    //const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);
    return (
        <>
            <Card>
                <Row>
                    <Card.Header className=" text-center"><FontAwesomeIcon icon={faUser} />***USER INFORMATION***<FontAwesomeIcon icon={faUser} /></Card.Header>
                </Row>
                <Row>
                <Col className="pb-1 pt-1 mb-3">
                    <Card.Img src={`../img/user.svg.png`} alt="" style={{ width: 300, height: 300 }} className="card-img-top w-100" />
                </Col>
                <Col>
                    <Row className="pt-3 mb-0">
                        <Card.Title>NAME : </Card.Title>
                    </Row>
                    <Row className="p-1 mb-1">
                        <Card.Text>{userData.nickname}</Card.Text>
                    </Row>
                    <Row className="pt-3 mb-1">
                        <Card.Title>EMAIL : </Card.Title>
                    </Row>
                    <Row className="p-1 mb-1">
                        <Card.Text>{userData.email}</Card.Text>
                    </Row>
                    <Row className="pt-4 mb-1 text-center">
                        <Link to="/cart">
                            <Button className="btn btn-success">VIEW CART</Button>
                        </Link>
                    </Row>
                </Col>
            </Row>
      </Card>
      </>
     );
};

export default Profil;