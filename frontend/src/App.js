/***********************************************************************
************ Authors:    Christian KEMGANG NGUESSOP ********************
************                        &                 ******************
************             Linda Rodiere TCHOUFFONG METOU ****************
************ Version:    1.0.0 *****************************************
***********************************************************************/

import React, { useEffect, useState } from "react";
import Routes from "./components/Routes";
import { UidContext } from "./components/AppContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/UserActions";



// Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faEnvelope, faLock, faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faUser, faEnvelope, faLock, faSearch)

function App() {
    const [uid, setUid] = useState(null);
    const dispatch = useDispatch();

  // to get user information
  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
      fetchToken();

      if (uid)
          dispatch(getUser(uid));

  //}, [uid]);
  }, [uid, dispatch]);

    return (
                <UidContext.Provider value={uid}>
                    <Routes />
                </UidContext.Provider>
  );
};

export default App;
