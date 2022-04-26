import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();

  const handleSubmit = event =>{
    event.preventDefault();
    const email =emailRef.current.value;
    console.log(email);
    const password = passwordRef.current.value;
    console.log(password);
  }
  const handleNavigateRegister = event =>{
    navigate('/register')

  }
  return (
    <div className="container w-50 mx-auto mt-2">
      <h1 className="text-center">Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>New to car-service? <Link to='/register' className="text-danger pe-auto text-decoration-none" onClick={handleNavigateRegister}>Please Register</Link></p>
    </div>
  );
};

export default Login;
