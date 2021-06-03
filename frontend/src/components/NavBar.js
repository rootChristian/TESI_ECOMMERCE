/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProducts, getProductsByCategories } from "../actions/ProductsActions";
import { UidContext } from "./AppContext";
import { Link } from "react-router-dom"
import { Button, Navbar, Nav, Form, FormControl, NavDropdown } from "react-bootstrap"
import cookie from "js-cookie";
import axios from "axios";

import { getNumbers } from "../actions/CartsActions";
import { connect } from "react-redux"

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faSignOutAlt, faSignInAlt, faShoppingCart, faHome, faDatabase } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {
    //console.log(props)

    useEffect(() => {
        getNumbers();
    },[])

    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);
    const categoriesData = useSelector((state) => state.categoriesReducer)
    const [category, setCategory] = useState('');
    const [product, setProduct] = useState('');
    const dispatch = useDispatch()
    let role = 0;

    if (userData.role === 1) role = 1; else role = 0;

    const logout = async () => {
        await axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}api/users/logout`,
            withCredentials: true,
        })
            .then(() => {
                if (window !== "undefined")
                    cookie.remove('jwt', { expires: 1 });
            })
            .catch((err) => console.log(err));

        window.location = "/";
    }

    const handleOnclick = async () => {
        const data = category
        if (data) {
            dispatch(getProductsByCategories(data))
            //console.log("Data by category: ", data)
        } else {
            dispatch(getProducts());
            //console.log("Category not select!!!")
        }

    }

    const handleSearch = async (e) => {
        e.preventDefault();
        const data = product
        if (data) {
            dispatch(getProduct(data))
            //console.log("Data product: ", data)
        } else {
            //console.log("Data not found!!! ")
        }
    }

    return (
        <>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <img src="./img/logo.png" alt="" width="30" height="24" class="d-inline-block align-top" />
                    <span class="navbar-toggler-logo">Backstore</span>
                </Navbar.Brand>
                <Navbar.Brand>         
                    <Link exact to="/"><FontAwesomeIcon icon={faHome} />Home</Link>
                </Navbar.Brand>
                {uid && role ?  (
                    <> 
                    <Navbar.Brand>
                        <Link to="/sign-up">Registration</Link>
                    </Navbar.Brand>
                    <div class="navbar-nav">
                        <NavDropdown title=" Admin" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/category">{<FontAwesomeIcon icon={faDatabase} color="blue" />}{userData.role ? (<a>InsertCategory</a>) : (<a></a>)}</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/product">{<FontAwesomeIcon icon={faDatabase} color="blue" />}{userData.role ? (<a>InsertProduct</a>) : (<a></a>)}</Link></NavDropdown.Item>
                        </NavDropdown>
                    </div>
                  </>
                ) : (<div></div>)}
                    
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="container text-">
                    <Form inline action="" onSubmit={handleSearch}>
                        <div class="input-group input-group-sm">
                            {categoriesData.length > 0 ? (
                                <select class="form-select" value={category._id} onClick={handleOnclick} onChange={(e) => setCategory(e.target.value)}>
                                    <option value=""> Select with category </option>
                                    {categoriesData.map(category => (<option value={category._id} key={category._id}> { category.name} </option>))}
                                </select>
                        ) : (<div></div>)}
                        <FormControl type="search" name="product" id="product" onChange={(e) => setProduct(e.target.value)} value={product} placeholder="Search" className="mr-sm-2" />
                            <div class="input-group-append">
                                <button class="btn btn-navbar" type="submit">
                                    <FontAwesomeIcon icon={faSearch} color="blue" />
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
                
                {uid ? (
                    <Navbar.Brand>
                        <NavDropdown title={` Welcome ${userData.nickname} `} id="basic-nav-dropdown" color="blue">
                            <NavDropdown.Item><Link to="/profil"><FontAwesomeIcon icon={faUser} color="blue" />Profil</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="#" onClick={logout}><FontAwesomeIcon icon={faSignOutAlt} color="blue" />Logout</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Brand>
                ) : (<Navbar.Brand>
                            <NavDropdown title={<FontAwesomeIcon icon={faUser} color="blue" />} id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to="/sign-in"><FontAwesomeIcon icon={faSignInAlt} color="blue" />Login</Link></NavDropdown.Item>
                        </NavDropdown></Navbar.Brand>
                    )}
                <Navbar.Brand>
                    <Link to="/cart"><span style={{ color: 'red' }}>{props.basketProps.basketNumbers}</span><FontAwesomeIcon icon={faShoppingCart} color="blue" /></Link>
                </Navbar.Brand>
            </Navbar>
        </>
    );
};


const mapStateToProps = state => ({
        basketProps: state.cartsReducer
})

export default connect(mapStateToProps, { getNumbers })(NavBar);