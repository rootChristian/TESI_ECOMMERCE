/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import React, { useState } from "react";
import axios from "axios";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt, faSignInAlt, faEnvelope, faRegistered, faKey, faLock, faSearch, faDatabase, faSave, faHome } from '@fortawesome/free-solid-svg-icons'
import Footer from "../Footer";

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector(".email_error");
        const passwordError = document.querySelector(".password_error");

        // do request on the database to get data
        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/users/login`,
            withCredentials: true,
            data: {
                email,
                password,
            },
        })
            .then((res) => {
                console.log(res);
                if (res.data.errors) {
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password;
                } else {
                    //return at home after login
                    window.location = "/";
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

        return (
            <>
            <div class="container-fluid h-100">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <form action="" onSubmit={handleLogin}>
                                <br /><br /><br />
                            <div class="text-center text-white bg-dark">
                                <FontAwesomeIcon icon={faRegistered} />***USER LOGIN***
                            </div>
                            <div class="mb-3">
                                    <label for="validationServer01" class="form-label"><FontAwesomeIcon icon={faEnvelope} />Email</label>
                                <input type="email" class="form-control is-valid" id="validationServer01" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email@example.com" required  />
                                    <div className="email_error"></div>
                            </div>
                            <div class="mb-3">
                                    <label for="validationServer02" class="form-label"><FontAwesomeIcon icon={faKey} />Password</label>
                                    <input type="password" class="form-control is-valid" id="validationServer02" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required />
                                    <div className="password_error"></div>
                            </div>
                            <div class="mb-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                        <label class="form-check-label" for="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <div class="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                            </div>
                            <div className="container">
                                <div class="row justify-content-evenly">
                                    <div class="col-auto me-auto"><button type="submit" class="btn btn-primary">Sign in</button></div>
                                    <div class="col-auto me-auto"><a href="/sign-up"><button type="button" class="btn btn-primary">Sign up</button></a></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
          );
}

export default SignInForm;