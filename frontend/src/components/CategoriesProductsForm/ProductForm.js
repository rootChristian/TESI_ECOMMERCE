/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProductsRegistration } from "../../actions/ProductsActions";
// Icons*
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered, faTextWidth, faTextHeight, faSortNumericUpAlt, faFileImage } from '@fortawesome/free-solid-svg-icons'

const ProductForm = () => {
    const categoriesData = useSelector((state) => state.categoriesReducer)
    const productsData = useSelector((state) => state.productsReducer)
    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [productPicture, setProductPicture] = useState('');
    const [formSubmit, setFormSubmit] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("quantity", quantity);
        formData.append("productPicture", productPicture);

        const nameError = document.querySelector('.name_error');
        const descriptionError = document.querySelector('description_error');
        const priceError = document.querySelector('.price_error');
        const categoryError = document.querySelector('.category_error');
        const quantityError = document.querySelector('.quantity_error');
        const productPictureError = document.querySelector('.productPicture_error');
        
        dispatch(postProductsRegistration(formData))
        setFormSubmit(true)
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
                                <form encType="multipart/form-data" onSubmit={handleRegister} >
                                    <br /><br /><br />
                                    <div class="text-center text-white bg-dark">
                                        <FontAwesomeIcon icon={faRegistered} />***PRODUCT REGISTRATION***
                            </div>
                                    <div class="mb-2">
                                        <label for="validationServer01" class="form-label"><FontAwesomeIcon icon={faTextWidth} />Name</label>
                                        <input type="text" class="form-control is-valid" id="validationServer01" onChange={(e) => setName(e.target.value)} value={name} placeholder="name" required />
                                        <div className="name_error"></div>
                                    </div>
                                    <div class="mb-2">
                                        <label for="validationServer02" class="form-label"><FontAwesomeIcon icon={faTextWidth} />Description</label>
                                        <textarea class="form-control is-valid" id="validationServer02" rows="2" onChange={(e) => setDescription(e.target.value)} value={description} required>
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
                                        {categoriesData.length > 0 ? (
                                            <select class="form-control is-valid" class="form-select" value={category._id} onChange={(e) => setCategory(e.target.value)} required>
                                                <option value="">Select...</option>
                                                {categoriesData.map(category => (<option value={category._id} key={category._id}> { category.name} </option>))}
                                            </select>
                                        ) : (<div></div>)}
                                        <div className="category_error"></div>
                                    </div>
                                    <div class="mb-2">
                                        <label for="validationServer05" class="form-label"><FontAwesomeIcon icon={faSortNumericUpAlt} />Quantity</label>
                                        <input type="number" class="form-control is-valid" id="validationServer05" onChange={(e) => setQuantity(e.target.value)} value={quantity} placeholder="quantity" required />
                                        <div className="quantity_error"></div>
                                    </div>
                                    <div class="mb-2">
                                        <label for="validationServer06" class="form-label"><FontAwesomeIcon icon={faFileImage} />Choose file</label>
                                        <input type="file" class="form-control" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={(e) => setProductPicture(e.target.files[0])} placeholder="image" required />
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
