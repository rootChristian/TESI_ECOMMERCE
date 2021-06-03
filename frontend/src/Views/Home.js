/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '../styles/components/carousel.css';
import ProductsList from "../Views/AllProducts";

const Home = () => {

    return (
        <div>
            <div className="carousel-bg">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src="\img\food.jpg"
                            style={{ width: 500, height: 300 }}
                            alt="First slide" />
                        <Carousel.Caption className="carousel-txt">
                            <h3>First slide label</h3>
                            <p>The best Africa foods...</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="\img\art.jpg"
                            style={{ width: 500, height: 300 }}
                            alt="Second slide" />

                        <Carousel.Caption className="carousel-txt">
                            <h3>Second slide label</h3>
                            <p>The best Africa arts...</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="\img\pagne.jpg"
                            style={{ width: 500, height: 300 }}
                            alt="Third slide" />
                        <Carousel.Caption className="carousel-txt">
                            <h3>Third slide label</h3>
                            <p>The best Africa clothing styles...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <ProductsList />

        </div>
    )
}

export default Home;

