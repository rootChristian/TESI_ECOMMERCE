/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../Views/Home'
import Profil from '../../Views/Profil';
import Cart from '../../Views/Cart';
import NavBar from '../NavBar';
import SignInForm from '../Log/SignInForm';
import SignUpForm from '../Log/SignUpForm';
import SingleProduct from '../../Views/SingleProduct';
import CategoryForm from '../CategoriesProductsForm/CategoryForm';
import ProductForm from '../CategoriesProductsForm/ProductForm';
import Footer from '../Footer';



const index = () => {
  return (
    <Router>
          <NavBar />
          
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profil" exact component={Profil} />
            <Route path="/sign-in" exact component={SignInForm} />
            <Route path="/sign-up" exact component={SignUpForm} />
            <Route path="/product" exact component={ProductForm} />
            <Route path="/ProductInfosPage" exact component={SingleProduct} />
            <Route path="/category" exact component={CategoryForm} />
            <Route path="/productInfosPage" exact component={SingleProduct} />
            <Route path="/cart:id?" exact component={Cart} />
            <Redirect to="/" />   
          </Switch>

      <Footer />
    </Router>
  );
};

export default index;

