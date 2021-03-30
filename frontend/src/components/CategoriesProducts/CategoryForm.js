/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import React, { useState } from "react";
import axios from "axios";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt, faSignInAlt, faEnvelope, faKey, faRegistered, faTextWidth, faLock, faSearch, faDatabase, faSave, faHome } from '@fortawesome/free-solid-svg-icons'
import Footer from "../Footer";

const CategoryForm = () => {

    const [name, setName] = useState("");
    const [formSubmit, setFormSubmit] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const nameError = document.querySelector(".name.error");

        // do request on the database to get data
        await axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/categories/registration`,
            data: { name }
        })
        .then((res) => {
            console.log(res);
            if (res.data.errorMessage) 
                nameError.innerHTML = res.data.errorMessage.name;
        })
        .catch((err) => console.log(err));
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
                    <CategoryForm />
                </>
            ) : (
                    <div class="container-fluid h-100">
                        <div class="row justify-content-center align-items-center h-100">
                            <div class="col col-md-6">
                                <form action="" onSubmit={handleRegister} >
                                    <br /><br /><br />
                                    <div class="text-center text-white bg-dark">
                                        <FontAwesomeIcon icon={faRegistered} />***CATEGORY REGISTRATION***
                                    </div>
                                    <div class="mb-2">
                                        <label for="validationServer01" class="form-label"><FontAwesomeIcon icon={faTextWidth} />Name</label>
                                        <input type="text" class="form-control is-valid" id="validationServer01" onChange={(e) => setName(e.target.value)} value={name} placeholder="name" required />
                                        <div className="name_error"></div>
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

export default CategoryForm;

