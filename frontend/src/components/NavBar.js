/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import React, { useContext } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useSelector } from "react-redux";
import { navLink } from "react-router-dom";
import { UidContext } from "./AppContext";
//import Logout from "./Log/Logout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt, faSignInAlt, faEnvelope, faLock, faSearch, faDatabase, faSave, faHome } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

    //const Logout = () => {
        const removeCookie = (key) => {
            if (window !== "undefined") {
                cookie.remove(key, { expires: 1 });
            }
        };

        const logout = async () => {
                await axios({
                    method: "get",
                    url: `${process.env.REACT_APP_API_URL}api/users/logout`,
                    withCredentials: true,
                })
                    .then(() => removeCookie("jwt"))
                    .catch((err) => console.log(err));

                window.location = "/";
            

        }
    //};

    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);
    const categoriesData = useSelector((state) => state.categoriesReducer)
    const admin = false;

    return (
<>          
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid collapse">
                    <div class="navbar-nav">
                        <navLink exact to="/">
                            <a class="navbar-brand" href="#">
                                <img src="./img/logo.png" alt="" width="30" height="24" class="d-inline-block align-top" />
                                <span class="navbar-toggler-logo">Backstore</span>
                            </a>
                        </navLink>
                            <a class="nav-link active" aria-current="page" href="/"><FontAwesomeIcon icon={faHome} />Home</a>
                        <a class="nav-link active" aria-current="page" href="/sign-up">Registration</a>
                       
                        <div class="navbar-nav">
                            {uid ? (
                            <a class="nav-link active" aria-current="page" href="/category"> {userData.role ? (<a>InsertCategory</a>) : (<a></a>)} </a>
                            ) : (<div></div>)}
                            {uid ? (
                                <a class="nav-link active" aria-current="page" href="/product"> {userData.role ? (<a>InsertProduct</a>) : (<a></a>)} </a>
                            ) : (<div></div>)}
                        </div>
                       
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                </div>
                <div class="container-fluid">

                    <form class="form-inline ml-3">
                        <div class="input-group input-group-sm">
                            {categoriesData.length > 0 ? (<select class="form-select" aria-label="" name="category" value="category">
                                <option value="">Select with category</option>
                                {categoriesData.map(category => (
                                    <option value={category._id} key={category._id}> { category.name} </option>
                                ))}</select>
                            ) : (<div class="alert alert-danger">
                                <strong>Success!</strong> Empty Category!
                            </div>
                                )
                            }
                            <input class="form-control form-control-navbar" type="search" name="key" placeholder="Search" aria-label="Search"/>
                                <div class="input-group-append">
                                    <button class="btn btn-navbar" type="submit">
                                    <FontAwesomeIcon icon={faSearch} color="blue" />
                                    </button>
                                </div>
			        
                        </div>
                    </form>

                    {uid ? (
                        <div class="navbar-nav">
                            <navLink exact to="/profil">
                                <a class="nav-link active" aria-current="page" href="/profil"><FontAwesomeIcon icon={faUser} color="blue" />Welcome {userData.nickname}</a>
                            </navLink>
                            <li onClick={logout}> <a class="nav-link active" aria-current="page" href="/logout"><FontAwesomeIcon icon={faSignOutAlt} color="blue" />Logout</a>
                            </li>

                        </div>
                    ) : (
                        <div class="navbar-nav">
                            <navLink exact to="/profil">
                                <a class="nav-link active" aria-current="page" href="/profil"><FontAwesomeIcon icon={faUser} color="blue" /></a>
                            </navLink>
                            <navLink exact to="/sign-in">
                                <a class="nav-link active" aria-current="page" href="/sign-in"><FontAwesomeIcon icon={faSignInAlt} color="blue" />Login</a>
                            </navLink>
                        </div>
                      )}
                </div>
               
            </nav>
        </>
    );
};

export default NavBar;