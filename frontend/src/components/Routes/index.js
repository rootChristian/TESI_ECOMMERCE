/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Cart from '../../pages/Cart';
import NavBar from '../NavBar';
import Logout from '../Log/Logout';
import SignInForm from '../Log/SignInForm';
import SignUpForm from '../Log/SignUpForm';
import CategoryForm from '../CategoriesProducts/CategoryForm';
import ProductForm from '../CategoriesProducts/ProductForm';
import Footer from '../Footer';
//import Navbar from '../Navbar';


const index = () => {
  return (
    <Router>
      <NavBar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profil" exact component={Profil} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/sign-in" exact component={SignInForm} />
              <Route path="/sign-up" exact component={SignUpForm} />
              <Route path="/product" exact component={ProductForm} />
              <Route path="/category" exact component={CategoryForm} />
            <Route path="/cart" exact component={Cart} />
            <Redirect to="/" />
        </Switch>
      <Footer />
    </Router>
  );
};

export default index;