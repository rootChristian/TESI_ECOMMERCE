/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt, faSignInAlt, faEnvelope, faKey, faTextWidth, faRegistered, faLock, faSearch, faDatabase, faSave, faHome } from '@fortawesome/free-solid-svg-icons'
import Footer from "../Footer";


const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const nicknameError = document.querySelector(".nickname_error");
    const emailError = document.querySelector(".email_error");
    const passwordError = document.querySelector(".password_error");
    const passwordConfirmError = document.querySelector(".password-confirm_error");
    const termsError = document.querySelector(".terms_error");

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword)
        passwordConfirmError.innerHTML =
          "The password must be 6 characters minimum";

      if (!terms.checked) termsError.innerHTML = "Accept all the conditions.";
    } else {
      // do request on the database to get data
      await axios({
        method: "post",
          url: `${process.env.REACT_APP_API_URL}api/users/registration`,
        data: {
          nickname,
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            nicknameError.innerHTML = res.data.errors.nickname;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

    return (
        <>
            {formSubmit ? (
                <>
                    <div class="container-fluid h-100">
                        <div class="row justify-content-center align-items-center h-100">
                            <div class="col col-md-6">
                                     <br /><br /><br />
                                <div class="alert alert-success">
                                    <strong>Success!</strong> Registration successfully, sign-in.
                                </div>
                            </div>
                        </div>
                    </div>
                    <SignInForm />
                </>
            ) : (
                    <div class="container-fluid h-100">
                        <div class="row justify-content-center align-items-center h-100">
                            <div class="col col-md-6">
                                <form action="" onSubmit={handleRegister}>
                                    <br /><br /><br />
                                    <div class="text-center text-white bg-dark">
                                        <FontAwesomeIcon icon={faRegistered} />***USER REGISTRATION***
                                    </div>
                                    <div class="mb-2">
                                        <label for="validationServer01" class="form-label"><FontAwesomeIcon icon={faTextWidth} />Nickname</label>
                                        <input type="text" class="form-control is-valid" id="validationServer01" onChange={(e) => setNickname(e.target.value)} value={nickname} placeholder="nickname" required />
                                        <div className="nickname_error"></div>
                                    </div>
                                    <div class="mb-2">
                                        <label for="validationServer02" class="form-label"><FontAwesomeIcon icon={faEnvelope} />Email</label>
                                        <input type="email" class="form-control is-valid" id="validationServer02" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email@example.com" required />
                                        <div className="email_error"></div>
                                    </div>
                                    <div class="mb-2">
                                        <label for="validationServer03" class="form-label"><FontAwesomeIcon icon={faKey} />Password</label>
                                        <input type="password" class="form-control is-valid" id="validationServer03" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required />
                                        <div className="password_error"></div>
                                    </div>
                                    <div class="mb-2">
                                        <label for="validationServer04" class="form-label"><FontAwesomeIcon icon={faKey} />Password</label>
                                        <input type="password" class="form-control is-valid" id="password-conf validationServer04" onChange={(e) => setControlPassword(e.target.value)} value={controlPassword} placeholder="Password" required />
                                        <div className="password-confirm_error"></div>
                                    </div>
                                    <div class="mb-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="terms" required />
                                            <label class="form-check-label" for="invalidCheck">
                                                Agree to terms and conditions
                                    </label>
                                            <div class="terms_error"></div>
                                        </div>
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

export default SignUpForm;
