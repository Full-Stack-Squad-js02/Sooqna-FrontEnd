import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate} from 'react-router-dom';
import { signIn, authenticate, isAuthenticated } from "../../auth/index";
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBIcon, MDBInput } from "mdb-react-ui-kit";
import LoginLogo from '../../Assests/logo.png';
import Swal from 'sweetalert2'

function SignIn() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const navigate = useNavigate();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })



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
        })
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        navigate('/');
        authenticate(data);
        // console.log(data);
        event.target.reset();
      }
    });
  };

  return (
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
                {/* <span className="h1 fw-bold mb-0">Logo</span> */}
                <img style={{width:'8rem'  , height:'8rem' }} src={LoginLogo}/>
              </div>

              {/* <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
                Sign into your account
              </h5> */}
              <br/>
              <br/>

              <MDBInput wrapperClass="mb-4" placeholder="User Name" type="text" size="lg" value={username} onChange={handleChange("username")} />
              <MDBInput wrapperClass="mb-4" placeholder="Password" type="password" size="lg" value={password} onChange={handleChange("password")} />

              <MDBBtn className="mb-4 px-5" style={{backgroundColor:'#003566'}}  size="lg" variant="primary" type="submit" onClick={handleSubmit}>
                Login
              </MDBBtn>
              {/* <a className="small text-muted" href="#!">
                Forgot password?
              </a> */}
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
