import React, { useState } from "react";
import { Container, Stack, Form, Button } from "react-bootstrap";

import firebaseApp from "../credenciales";
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithRedirect,
    GoogleAuthProvider,
        } from "firebase/auth";

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

 const Login = () => {
     const [ registro, setRegistro] = useState(false);

async function submitHandler(e){
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const pass = e.target.formBasicPassword.value;
    if(registro){
        const usuario = await createUserWithEmailAndPassword(auth, correo, pass)
    } else{
          signInWithEmailAndPassword(auth, correo, pass);
    }
    
    }
    return (
        <Container>
            <Stack gap={3}>
                <h1>{registro ? "Registrate" : "Inicia sesión"}</h1>
                <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="dark" type="submit" >
            {registro ? "Registrate" : " Inicia sesión"}
        </Button>
        </Form>

        <Button
        onClick={() => signInWithRedirect(auth, googleProvider)}
         variant="primary" type="submit" style={{ width: "300px"}}>
            Acceder con Google
        </Button>

        <Button
            style={{ width: "300px"}}
            variant="secondary"
            onClick={() => setRegistro( !registro)}>
            {registro ? "Ya tienes usuario? Inicia sesión" : "No tienes Cuenta? Registrate" }
        </Button>

    </Stack>
</Container>

    );
    
};

export default Login;