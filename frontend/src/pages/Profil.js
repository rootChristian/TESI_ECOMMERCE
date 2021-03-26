/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import React, { useContext } from "react";
//import Log from "../components/Log";
//import LeftNav from "../components/LeftNav";
import { UidContext } from "../components/AppContext";
// Icons
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import SignInForm from "../components/Log/SignInForm";
import Cart from "./Cart";
import Home from "./Home";
//import SignUpForm from "../components/Log/SignUpForm";

//profil user if uid is true go to list cart
const Profil = () => {
  const uid = useContext(UidContext);
  return (
    
      <div className="container-fluid">
      {uid ? (
        <div>
                  LIST CART
                  <Cart />
        </div>
      ) : (
                  <div class="container-fluid">
                      <Home/>
        </div>
      )}
    </div>
  );
};

export default Profil;
