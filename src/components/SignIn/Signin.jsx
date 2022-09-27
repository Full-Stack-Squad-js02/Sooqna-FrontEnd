import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate} from 'react-router-dom';
import { signIn, authenticate, isAuthenticated } from "../../auth/index";
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBIcon, MDBInput } from "mdb-react-ui-kit";

function SignIn() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const navigate = useNavigate();

  const handleChange = (name) => (event) => {
    setData({
      ...data,
      error: false,
      // success:false,
      [name]: event.target.value,
    });
  };
  // console.log(username, email, password, phoneNumber, adress);

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(data).then((data) => {
      if (data.error) {
        console.log('ERROR');
        setData({
          ...data,
          error: data.error,
          // success: false
        });
      } else {
        setData({
          ...data,
          // success: true
        });
        navigate('/');
        authenticate(data);
        // console.log(data);
        event.target.reset();
      }
    });
  };

  return (
    // <Form onSubmit={handleSubmit}>

    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>User Name</Form.Label>
    //     <Form.Control type="text" placeholder="Enter your name" value={username} onChange={handleChange('username')} />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" value={password} onChange={handleChange('password')}  />
    //   </Form.Group>

    //   <Button variant="primary" type="submit">
    //     Sign In
    //   </Button>
    // </Form>

    <MDBContainer className="my-5" >
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="rounded-start w-100" />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: "#ff6219" }} />
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
                Sign into your account
              </h5>

              <MDBInput wrapperClass="mb-4" placeholder="User Name" type="text" size="lg" value={username} onChange={handleChange("username")} />
              <MDBInput wrapperClass="mb-4" placeholder="Password" type="password" size="lg" value={password} onChange={handleChange("password")} />

              <MDBBtn className="mb-4 px-5" color="dark" size="lg" variant="primary" type="submit" onClick={handleSubmit}>
                Login
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a href="#!" style={{ color: "#393f81" }} onClick={() => navigate('/signup')}>
                  Register here
                </a>
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignIn;
