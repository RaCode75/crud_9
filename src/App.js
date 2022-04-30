import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";

import firebaseApp from "./credenciales";

// auth code
import {getAuth, onAuthStateChanged} from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
 
      const [usuarioGlobal, setUsuarioGlobal] = useState(null);

      onAuthStateChanged(auth, (usuarioFirebase) => {
            if(usuarioFirebase){
                  //sesion iniciada
                  setUsuarioGlobal(usuarioFirebase);
            } else {
                  //no hay sesion iniciada
                  setUsuarioGlobal(null);
            }
      });

      return <>{usuarioGlobal ? <Home /> : <Login /> }</>;

}

export default App;
