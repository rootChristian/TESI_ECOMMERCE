/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP ********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import React from "react";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSignOutAlt, faSignInAlt, faTextWidth, faTextHeight, faSortNumericUpAlt, faFileImage, faSave, faHome } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    return (

        <footer class="container-fluid body-center py-5">
            <div class="row text-white bg-dark">
                    <div class="col-12 col-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                        <small class="d-block text-muted">&copy; 2020-2021 All rights reserved.</small>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Author:</h5>
                        <ul class="list-unstyled text-small footer">
                        <li class="text-muted col-auto me-auto">Christian KEMGANG NGUESSOP</li>
                        <li><a class="text-muted col-auto me-auto" href="mailto:hege@example.com"><FontAwesomeIcon icon={faEnvelope} />softwarechristian1@gmail.com</a></li>
                        </ul>
                    </div>
            </div>
        </footer>
       );
}

export default Footer;
