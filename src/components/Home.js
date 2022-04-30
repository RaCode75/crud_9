import React from "react";
import { Container, Button } from "react-bootstrap";

import firebaseApp from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

 const Home = () => {
    return <Container>
        <h4>Hola, usuario</h4>
        <Button onClick = {() => signOut(auth)}>Cerrar sesion</Button>
    </Container>;
}

export default Home;