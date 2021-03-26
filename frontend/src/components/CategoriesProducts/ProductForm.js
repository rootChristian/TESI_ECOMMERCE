/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt, faSignInAlt, faRegistered, faTextWidth, faTextHeight, faSortNumericUpAlt, faFileImage, faSave, faHome } from '@fortawesome/free-solid-svg-icons'
import Footer from "../Footer";

const ProductForm = () => {
    const categoriesData = useSelector((state) => state.categoriesReducer)

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [productPicture, setProductPicture] = useState('');
    const [formSubmit, setFormSubmit] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const nameError = document.querySelector('.name_error');
        const descriptionError = document.querySelector('description_error');
        const priceError = document.querySelector('.price_error');
        const categoryError = document.querySelector('.category_error');
        const quantityError = document.querySelector('.quantity_error');
        const productPictureError = document.querySelector('.productPicture_error');
    }

    return (
        <>
            {formSubmit ? (
                <>
                    <div class="container-fluid h-100">
                        <div class="row justify-content-center align-items-center h-100">
                            <div class="col col-md-6">
                                <br /><br />
                                <div class="alert alert-success">
                                    <strong>Success!</strong> Registration successfully, add another!
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductForm />
                </>
            ) : (
            <div class="container-fluid h-100">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col col-md-6">
                            <form action="" onSubmit={handleRegister} >
                                    <br /><br /><br />
                            <div class="text-center text-white bg-dark">
                                <FontAwesomeIcon icon={faRegistered} />***PRODUCT REGISTRATION***
                            </div>
                            <div class="mb-2">
                                    <label for="validationServer01" class="form-label"><FontAwesomeIcon icon={faTextWidth} />Name</label>
                                <input type="text" class="form-control is-valid" id="validationServer01" onChange={(e) => setName(e.target.value)} value={name} placeholder="name" required  />
                                    <div className="name_error"></div>
                            </div>
                            <div class="mb-2">
                                    <label for="validationServer02" class="form-label"><FontAwesomeIcon icon={faTextWidth} />Description</label>
                                    <textarea class="form-control is-valid" id="validationServer02" rows="2" onChange={(e) => setDescription(e.target.value)} value={description} placeholder="description..." required> 
                                    </textarea>
                                    <div className="description_error"></div>
                            </div>
                            <div class="mb-2">
                                <label for="validationServer03" class="form-label"><FontAwesomeIcon icon={faSortNumericUpAlt} />Price</label>
                                <input type="number" class="form-control is-valid" id="validationServer03" onChange={(e) => setPrice(e.target.value)} value={price} placeholder="price" required />
                                <div className="price_error"></div>
                            </div>
                            <div class="mb-2">
                                <label for="validationServer04" class="form-label"><FontAwesomeIcon icon={faTextHeight} />Category</label>
                                {categoriesData.length > 0 ? (<select class="form-select" aria-label="" name="category" value="category" required >
                                    <option value="">Select...</option>
                                    {categoriesData.map(category => (
                                        <option onChange={(e) => setCategory(e.target.value)} value={category} key={category._id}> { category.name} </option>
                                    ))}</select>
                            ) : (       <div class="alert alert-danger">
                                            <strong>Success!</strong> Empty Category!
                                        </div>
                                    )
                                }
                                <div className="category_error"></div>
                            </div>
                            <div class="mb-2">
                                <label for="validationServer05" class="form-label"><FontAwesomeIcon icon={faSortNumericUpAlt} />Quantity</label>
                                <input type="number" class="form-control is-valid" id="validationServer05" onChange={(e) => setQuantity(e.target.value)} value={quantity} placeholder="quantity" required />
                                <div className="quantity_error"></div>
                            </div>
                            <div class="mb-2">
                                <label for="validationServer06" class="form-label"><FontAwesomeIcon icon={faFileImage} />Image</label>
                                <input type="file" class="form-control" aria-describedby="inputGroupFileAddon04" aria-label="Upload" name="productPicture" id="productPicture" onChange={(e) => setProductPicture(e.target.value)} value={productPicture} placeholder="image" required />
                                <div className="productPicture_error"></div>
                            </div>

                            <div className="container">
                                <div class="row justify-content-evenly">
                                    <div class="col-auto me-auto"><button type="submit" class="btn btn-primary">Save</button></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

           )}
        </>
    );

};

export default ProductForm;
/*
<form action="" onSubmit={handleRegister} id="sign-up-form">
    <label htmlFor="name"> Name </label>
    <br />
    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value={name} />
    <div className="name error"></div>

    <label htmlFor="description"> Description </label>
    <br />
    <input type="textArea" name="description" id="description" onChange={(e) => setDescription(e.target.value)} value={description} />
    <div className="description error"></div>

    <label htmlFor="price"> Price </label>
    <br />
    <input type="number" name="price" id="price" onChange={(e) => setPrice(e.target.value)} value={price} />
    <div className="price error"></div>

    <label htmlFor="category"> Category </label>
    <br />
    {categoriesData.length > 0 ? (<select name="category" value="category">
        {categoriesData.map(category => (
            <option onChange={(e) => setCategory(e.target.value)} value={category} key={category._id}> { category.name} </option>
        ))}</select>
    ) : (<h1> EMPTY CATEGORY!!! </h1>)
    }
    <div className="category error"></div>

    <label htmlFor="quantity"> Quantity </label>
    <br />
    <input type="number" name="quantity" id="quantity" onChange={(e) => setQuantity(e.target.value)} value={quantity} />
    <div className="quantity error"></div>

    <label htmlFor="productPicture"> Picture </label>
    <br />
    <input type="file" class="form-control" aria-describedby="inputGroupFileAddon04" aria-label="Upload" name="productPicture" id="productPicture" onChange={(e) => setProductPicture(e.target.value)} value={productPicture} />
    <div className="file error"></div>

    <input type="submit" value="Save" />
</form>*/